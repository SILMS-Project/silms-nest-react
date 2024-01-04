import { Role } from "@/utils/constants";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    
    @ApiProperty()
    @IsNotEmpty({ message: 'First name is required' })
    @IsString()
    firstName: string;

    @ApiProperty()
    @IsOptional()
    middleName: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Last name is required'})
    @IsString()
    lastName: string;
    
    @ApiProperty()
    @IsNotEmpty({ message: 'Email is required'})
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Password is required'})
    password: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Role password is required'})
    role: Role;
}


