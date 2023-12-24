import { Controller, UseGuards, Get, Post, Body, Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ChangePasswordDto, CreateAuthDto, LoginUserDto } from './dto/create-auth.dto';
import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard';
import { log } from 'console';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    
    return this.authService.login(loginUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('change-password')
  async changePassword(@Body() changePasswordDto: ChangePasswordDto) {
    return this.authService.changePassword(changePasswordDto.id, changePasswordDto.password);
  }

  @Post('reset-password')
  async resetPassword(@Body() resetPasswordDto: CreateAuthDto) {
    return this.authService.resetPassword(resetPasswordDto.email);
  }

  // @UseGuards(JwtAuthGuard) 
  // @Get('protected')
  // getHello (@Request() req) : string {
  //   return req.user;
  // }

}