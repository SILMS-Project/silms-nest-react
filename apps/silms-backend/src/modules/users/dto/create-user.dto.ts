import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import {
  Equals,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Role } from '@/utils/constants';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsString({ message: 'Email should be a string' })
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Username is required' })
  @IsString({ message: 'Username should be a string' })
  readonly username: string;

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