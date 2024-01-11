import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserProps } from '../interfaces/user.interface';
import { ProfileProps } from '../interfaces/profile.interface';
import { PasswordService } from './password.service';
import { AuthService } from '@/modules/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private authService: AuthService,
    private passwordService: PasswordService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User | any> {
    const user = await this.findByAuthId(createUserDto.authId);
    if (user) {
      throw new Error('User already exists');
    }

    const userProps: UserProps = {
      ...createUserDto,
      auth: await this.authService.find(createUserDto.authId)
    }

    const newUser = this.userRepository.create({
      ...userProps
    })

    return await this.userRepository.save(newUser);
  }


  async findByAuthId(authId: string) : Promise<User> {
    const user = await this.userRepository.findOneBy({auth: {id: authId}});

    if (!user) {
      throw new Error("User not found!");
    }
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }


  async findOneById(id: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<any> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new Error('User not found');
    }
    return this.userRepository.update(user, updateUserDto).then(() => {
      return { message: 'User updated successfully' };
    });
  }

  async remove(id: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return this.userRepository.remove(user).then(() => {
      return { message: 'User deleted successfully' };
    });
  }
}
