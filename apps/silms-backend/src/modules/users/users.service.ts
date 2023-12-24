import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserRepository } from './users.repository';
import { Role } from '@/utils/constants';


@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserRepository) private userRepository: UserRepository) {}
  
  create(createUserDto: CreateUserDto) {
    const user = this.findOne(createUserDto.email);
    if (user) { throw new Error('User already exists'); }

    createUserDto.isVerified = false;
    createUserDto.role = Role.Student;
    createUserDto.createdAt = new Date();
    createUserDto.updatedAt = new Date();
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(email: string) : Promise<User | undefined> {
    // return `This action returns a #${id} user`;
    // return this.users.find(user => user.email === email);
    return this.userRepository.findByEmail(email);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}


