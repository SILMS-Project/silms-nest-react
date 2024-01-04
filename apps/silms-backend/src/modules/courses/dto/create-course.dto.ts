import { CourseType } from '@/utils/constants';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsUUID, IsEnum } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Course code is required' })
  @IsString({ message: 'Course code should be a string' })
  readonly courseCode: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Course title is required' })
  @IsString({ message: 'Course title should be a string' })
  readonly courseTitle: string;

  @ApiProperty()
  @IsString({ message: 'Description should be a string' })
  readonly description: string;

  @ApiProperty({ enum: CourseType, enumName: 'CourseType' })
  @IsNotEmpty({ message: 'Course type is required' })
  @IsEnum(CourseType, { message: 'Invalid course type' })
  readonly courseType: CourseType;

  @ApiProperty()
  @IsNotEmpty({ message: 'Unit is required' })
  @IsNumber({}, { message: 'Unit should be a number' })
  readonly unit: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Semester is required' })
  @IsNumber({}, { message: 'Semester should be a number' })
  readonly semester: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString({ message: 'Invalid file path' })
  readonly image?: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Program ID is required' })
  @IsUUID('4', { message: 'Invalid Program ID format' })
  readonly programId: string;
}
