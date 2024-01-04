import { SubmissionStatus } from '@/utils/constants';
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateSubmissionDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Submission title is required' })
  @IsString()
  readonly submissionTitle: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Content is required' })
  @IsString()
  readonly content: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'status is required' })
  @IsString()
  readonly status: SubmissionStatus;

  @ApiProperty({ type: 'string', format: 'date-time' }) // Assuming submissionDate is a date-time string
  @IsNotEmpty({ message: 'Submission date is required' })
  @IsDateString()
  readonly submissionDate: string;
}
