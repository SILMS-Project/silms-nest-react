import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserProps } from './interfaces/user.interface';
import { AuthService } from '@/modules/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private authService: AuthService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User | any> {

    const user = await this.findByAuthEmail(createUserDto.email);

    if (user) {
      throw new Error('User already exists');
    }

    const userProps: UserProps = {
      ...createUserDto,
      auth: await this.authService.findOneByEmail(createUserDto.email)
    }


    // Create user's auth
    const newAuth = await this.authService.create({
      ...createUserDto,
    })

    const newUser = this.userRepository.create({
      ...userProps,
      auth: newAuth,
    })

    return await this.userRepository.save(newUser);
  }

  async findByAuthEmail(email: string) : Promise<User> {
    return await this.userRepository.findOneBy({auth: {email}});
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneById(id: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async find(id: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error("User not found!");
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<any> {
    const user = await this.find(id);

    return this.userRepository.update(user, updateUserDto).then(() => {
      message: 'User updated successfully'
    });
  }

  async remove(id: string): Promise<any> {
    const user = await this.find(id);

    return this.userRepository.remove(user).then(() => {
      message: 'User deleted successfully'
    });
  }
}
