import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@modules/auth/jwt.strategy';
import { MailModule } from '../mail/mail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { PasswordService } from './password.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Auth]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_TIME },
    }),
    MailModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, PasswordService],
  exports: [AuthService],
})
export class AuthModule {}
