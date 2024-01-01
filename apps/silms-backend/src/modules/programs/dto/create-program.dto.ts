import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray, ValidateNested, IsUUID } from 'class-validator';
import {  Course } from '@modules/courses/entities/course.entity'; 

export class CreateProgramDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Program name is required' })
  @IsString({ message: 'Program name should be a string' })
  readonly programName: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Description is required' })
  @IsString({ message: 'Description should be a string' })
  readonly description: string;

  @ApiProperty({ type: [Course], example: [{ courseCode: 'A', courseTitle: 'Course A', unit: 3, semester: 1, p: 4 }] })
  @IsNotEmpty({ message: 'Courses are required' })
  @IsArray({ message: 'Courses should be an array' })
  @ValidateNested({ each: true })
  @Type(() => Course)
  readonly courses: Course[];
  
  @ApiProperty()
  @IsNotEmpty({ message: 'Requirements are required' })
  @IsString({ message: 'Requirements should be a string' })
  readonly requirements: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'School ID is required' })
  @IsUUID('4', { message: 'Invalid School ID format' })
  readonly schoolId: string;
}
