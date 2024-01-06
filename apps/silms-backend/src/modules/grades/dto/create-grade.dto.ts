import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateGradeDto {
  @ApiProperty({ required: false })
  @IsNotEmpty({ message: 'Score is required' })
  @IsNumber({}, { message: 'Score should be a number' })
  readonly score?: number;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Submission ID is required' })
  readonly submissionId: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Student ID is required' })
  readonly studentId: string;
}
