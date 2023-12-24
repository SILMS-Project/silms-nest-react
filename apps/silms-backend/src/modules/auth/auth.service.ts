import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto, LoginUserDto } from './dto/create-auth.dto';
import { UsersService } from '@modules/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {

  constructor(private userService: UsersService, private jwtService: JwtService) {}

  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  async validateUser (email: string, password: string) : Promise<any> {
    const user = await this.userService.findOne(email);

    if (user && user.password === password){
      const {password, email, ...rest} = user;
      return rest;
    }

    throw new UnauthorizedException();
  }

  async login (loginUserDto: LoginUserDto) {
    const payload = await this.validateUser(loginUserDto.email, loginUserDto.password);

    return {
      access_token: this.jwtService.sign(payload)
    }
  }

  async register (createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }
}
