import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CreateProgramDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Program name is required' })
  @IsString({ message: 'Program name should be a string' })
  readonly programName: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Description is required' })
  @IsString({ message: 'Description should be a string' })
  readonly description: string;

  @ApiProperty({ type: [String], example: ['Course A', 'Course B'] })
  @IsNotEmpty({ message: 'Courses are required' })
  @IsArray({ message: 'Courses should be an array' })
  @IsString({ each: true, message: 'Each course should be a string' })
  readonly courses: string[];

  @ApiProperty()
  @IsNotEmpty({ message: 'Requirements are required' })
  @IsString({ message: 'Requirements should be a string' })
  readonly requirements: string;
}
