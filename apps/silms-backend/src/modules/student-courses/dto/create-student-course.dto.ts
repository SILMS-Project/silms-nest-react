import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsOptional,
  IsBoolean,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentCourseDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Student ID is required' })
  readonly studentId: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Course ID is required' })
  readonly courseId: string;

  @ApiProperty()
  @IsOptional()
  @IsDate({ message: 'Invalid enrollment date' })
  readonly enrollmentDate?: Date;

  @ApiProperty()
  @IsOptional()
  @IsDate({ message: 'Invalid completion date' })
  readonly completionDate?: Date;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Grade should be a string' })
  readonly grade?: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Status should be a string' })
  readonly status?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber({}, { message: 'Progress should be a number' })
  readonly progress?: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean({ message: 'Attendance should be a boolean' })
  readonly attendance?: boolean;
}
