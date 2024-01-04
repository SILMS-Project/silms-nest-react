import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAssessmentDto {
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

  @ApiProperty()
  @IsNotEmpty({ message: 'Total grade is required' })
  @IsNumber({}, { message: 'Total grade should be a number' })
  readonly totalGrade: number;
}
