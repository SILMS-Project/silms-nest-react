import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '@modules/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@modules/auth/jwt.strategy';


@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: {expiresIn: process.env.JWT_TIME}
  })],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy ],
})
export class AuthModule {}
