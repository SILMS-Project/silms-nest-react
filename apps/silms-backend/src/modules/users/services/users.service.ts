import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserProps } from '../interfaces/user.interface';
import { Profile } from '../entities/profile.entity';
import { ProfileProps } from '../interfaces/profile.interface';
import { PasswordService } from './password.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
    private passwordService: PasswordService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User | any> {
    const user = await this.findOneByEmail(createUserDto.email);
    if (user) {
      throw new Error('User already exists');
    }

    if (!this.passwordService.checkPasswordStrength(createUserDto.password)) {
      throw new Error('Password is too weak');
    }

    const userProps: UserProps = {
      ...createUserDto,
      password: await this.passwordService.hashPassword(createUserDto.password),
      // createdAt: new Date(),
      // updatedAt: new Date(),
      isVerified: false,
    };

    const newUser = await this.userRepository.save(userProps);

    const profileProps: ProfileProps = {
      ...createUserDto,
    };

    const newProfile = this.profileRepository.create({
      ...profileProps,
      user: newUser,
    });

    newUser.profile = await this.profileRepository.save(newProfile);
    return newUser;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async changePassword(userId: string, newPassword: string): Promise<any> {
    const user = this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new Error('User not found');
    }

    if (!this.passwordService.checkPasswordStrength(newPassword)) {
      throw new Error('Password is too weak');
    }

    const hashedPassword = await this.passwordService.hashPassword(newPassword);
    return await this.userRepository
      .update(userId, { password: hashedPassword })
      .then(() => {
        return { message: 'Password changed successfully' };
      });
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { email } });
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
