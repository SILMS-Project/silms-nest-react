import { CreateUserDto } from '@/modules/users/dto/create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLecturerDto extends CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Employee ID is required' })
  @IsString()
  employeeId: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Department is required' })
  @IsString()
  department: string;
}
