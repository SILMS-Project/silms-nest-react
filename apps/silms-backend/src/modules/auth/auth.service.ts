import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UsersService } from '@modules/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private userService: UsersService, private jwtService: JwtService) {}

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  async validateUser (username: string, password: string) : Promise<any> {
    const user = await this.userService.findOne(username);

    if (user && user?.password === password){
      const {password, username, ...rest} = user;
      return rest;
    }

    return null;
  }

  async login (user: any) {
    const payload = {name: user.name, sub: user.id};

    return {
      access_token: this.jwtService.sign(payload)
    }
  }

  // findAll() {
  //   return `This action returns all auth`;
  // }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }
  //
  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
