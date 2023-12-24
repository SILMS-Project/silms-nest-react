import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ChangePasswordDto, LoginUserDto } from './dto/create-auth.dto';
import { UsersService } from '@/modules/users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from '../users/services/password.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private passwordService: PasswordService,
  ) {}


  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);

    const isValidPassword = await this.passwordService.comparePassword(
      password,
      user.password,
    );

    if (user && isValidPassword) {
      const { password, email, ...rest } = user;
      return rest;
    }

    throw new UnauthorizedException();
  }

  async login(loginUserDto: LoginUserDto) {
    const payload = await this.validateUser(
      loginUserDto.email,
      loginUserDto.password,
    );

    return {
      access_token: this.jwtService.sign(payload),
    };
  }


  async changePassword(changePasswordDto: ChangePasswordDto) {
    if (changePasswordDto.password !== changePasswordDto.confirmPassword) {
      throw new Error('Passwords do not match');
    }
    return await this.userService.changePassword(changePasswordDto.id, changePasswordDto.password);
  }

  resetPassword(email: string) {
    throw new Error('Method not implemented.');
  }
}
