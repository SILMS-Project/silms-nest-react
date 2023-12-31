import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCourseContentDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Title is required' })
  @IsString()
  readonly title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  readonly description?: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Content is required' })
  @IsString()
  readonly content: string;
}
