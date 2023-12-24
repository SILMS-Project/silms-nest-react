import { Role } from '@/utils/constants';
import { ApiProperty } from '@nestjs/swagger';
import { Equals, IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateAuthDto {
  @ApiProperty()
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsString({ message: 'Email should be a string' })
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(5, { message: 'Password should be at least 5 characters long' })
  @IsString({ message: 'Password should be a string' })
  readonly password: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Confirm password is required' })
  @IsString({ message: 'Confirm password should be a string' })
  readonly cpassword: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Role is required' })
  //   @IsString({ message: 'Role should be a string' })
  readonly role: Role;
}

export class LoginUserDto {
    @ApiProperty()
    @IsEmail({}, { message: 'Invalid email format' })
    @IsNotEmpty({ message: 'Email is required' })
    email: string;
  
    @ApiProperty()
    @IsNotEmpty({ message: 'Password is required' })
    @IsString()
    password: string;
  }

  export class ResetPasswordDto {
    @ApiProperty()
    @IsEmail({}, { message: 'Invalid email format' })
    @IsNotEmpty({ message: 'Email is required' })
    email: string;
  }
  
  export class ChangePasswordDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Password is required' })
    @MinLength(5, { message: 'Password should be at least 5 characters long' })
    password: string;
  
    @ApiProperty()
    @IsNotEmpty({ message: 'Confirm password is required' })
    // @Equals('password', { message: 'Passwords do not match' })
    confirmPassword: string;
  
    @ApiProperty()
    @IsNotEmpty({ message: 'Invalid request, id is required' })
    id: string;
  
    // @ApiProperty()
    // @IsNotEmpty({ message: 'Invalid request, code is required' })
    // code: string;
  }

  
