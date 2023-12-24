import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserProps } from './interfaces/user.interface';
import { Profile } from './entities/profile.entity';
import { ProfileProps } from './interfaces/profile.interface';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.findOne(createUserDto.email);
    if (user) {
      throw new Error('User already exists');
    }

    const userProps: UserProps = {
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: new Date(),
      isVerified: false,
    };

    const profileProps: ProfileProps = {
      ...createUserDto
    };

    const newUser = await this.userRepository.save(userProps);

    const newProfile = this.profileRepository.create({
      ...profileProps,
      user: newUser
    });

    this.profileRepository.save(newProfile);
    
    return newUser;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { email } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new Error('User not found');
    }
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    const user = this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return this.userRepository.delete(id);
  }
}
