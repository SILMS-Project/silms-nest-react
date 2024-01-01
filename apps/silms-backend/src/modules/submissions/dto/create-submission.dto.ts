import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSubmissionDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Submission title is required' })
  @IsString()
  readonly submissionTitle: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Content is required' })
  @IsString()
  readonly content: string;
}
