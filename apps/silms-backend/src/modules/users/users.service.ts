import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export type User = {
  id: number,
  name: string,
  email: string,
  password: string
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'George',
      email: 'uwagbalegeorge@gmail.com',
      password: 'password'
    },
    {
      id: 2,
      name: 'Ade',
      email: 'Ogunde',
      password: 'password1'
    }
  ]
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(email: string) : Promise<User | undefined> {
    // return `This action returns a #${id} user`;
    return this.users.find(user => user.email === email);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}


