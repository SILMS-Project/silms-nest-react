import { Controller, UseGuards, Get, Post, Body, Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ChangePasswordDto, ConfirmResetPasswordDto, CreateAuthDto, LoginUserDto, ResetPasswordDto } from './dto/create-auth.dto';
import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    
    return this.authService.login(loginUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('change-password')
  async changePassword(@Body() changePasswordDto: ChangePasswordDto) {
    return this.authService.changePassword(changePasswordDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Post('reset-password')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordDto.email);
  }

  @UseGuards(JwtAuthGuard)
  @Post('confirm-reset-password')
  async confirmResetPassword (@Body() confirmResetPassword: ConfirmResetPasswordDto, @Request() req) {
    return this.authService.confirmResetPassword(confirmResetPassword, req.rawHeaders[11]);
  }
}