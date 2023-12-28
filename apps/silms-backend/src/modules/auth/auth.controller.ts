import { Controller, UseGuards, Post, Body, Request, Param} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ChangePasswordDto, ConfirmResetPasswordDto, LoginUserDto, ResetPasswordDto } from './dto/create-auth.dto';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';

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

  @Post('reset-password')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordDto.email);
  }

  @Post('confirm-reset-password/:token')
  async confirmResetPassword (@Param('token') token: string, @Body() confirmResetPassword: ConfirmResetPasswordDto) {
    return this.authService.confirmResetPassword(confirmResetPassword, token);
  }

  @Post('verify-account/:token')
  async verifyAccount (@Param('token') token: string) {
    return this.authService.verifyAccount(token);
  }
}