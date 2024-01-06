import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  IsObject,
  ValidateNested,
} from 'class-validator';

export class CreateApplicationDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Essay is required' })
  @IsString()
  essay: string;

  @ApiProperty({ type: 'object', additionalProperties: { type: 'number' } })
  @IsObject()
  @ValidateNested()
  jambScores: { [subject: string]: number };

  @ApiProperty()
  @IsNotEmpty({ message: 'Total JAMB score is required' })
  @IsNumber()
  totalJambScore: number;

  @ApiProperty({ type: 'object', additionalProperties: { type: 'number' } })
  @IsObject()
  @ValidateNested()
  waecScores: { [subject: string]: number };

  @ApiProperty()
  @IsNotEmpty({ message: 'Total WAEC score is required' })
  @IsNumber()
  totalWaecScore: number;
}
