import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ChangePasswordDto, ConfirmResetPasswordDto, LoginUserDto } from './dto/create-auth.dto';
import { UsersService } from '@/modules/users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from '../users/services/password.service';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { MailService } from '../mail/mail.service';

@Injectable()
export class AuthService {
  
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private passwordService: PasswordService,
    private mailService: MailService
  ) {}


  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);

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
    const user = await this.validateUser(
      loginUserDto.email,
      loginUserDto.password,
    );

    const payload = {sub: user.id};

    return {
      access_token: this.jwtService.sign(payload),
    };
  }


  async changePassword(changePasswordDto: ChangePasswordDto) {
    if (changePasswordDto.password !== changePasswordDto.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    const user = await this.userService.findOneById(changePasswordDto.id);

    if (!user) {
      throw new Error("User does not exist");
    }
    
    if (!this.passwordService.comparePassword(changePasswordDto.oldPassword, user.password)) {
      throw new Error("Incorrect old password");
    }

    return await this.userService.changePassword(changePasswordDto.id, changePasswordDto.password);
  }

  async resetPassword(email: string) {
    const user = await this.userService.findOneByEmail(email);
    const token = this.jwtService.sign({sub: user.id})
    
    
    if (!user) {
      throw new Error("User does not exist");
    }

    // Send a confirmation url(contains jwt token) to the user via email
    await this.mailService.sendResetPassword(user, token);

    
    return { message: 'A confirmation email has been sent to you.' }
  }

  async confirmResetPassword(confirmResetPasswordDto: ConfirmResetPasswordDto, token: string) {

    if (confirmResetPasswordDto.password !== confirmResetPasswordDto.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    const userId = this.jwtService.decode(token.split(" ")[1]).id;
    return await this.userService.changePassword(userId, confirmResetPasswordDto.password);
  }

  async verifyAccount(token: string) {

    const user = await this.userService.findOneById(
      this.jwtService.decode(token).id
    );

    if (!user) {
      throw new Error("User does not exist!");
    }

    user.isVerified = true;

    const updatedUser: UpdateAuthDto = {
      ...user
    }

    return await this.userService.update(user.id, updatedUser);
  }
}
