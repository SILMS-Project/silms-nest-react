import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray, ArrayMinSize } from 'class-validator';

export class CreateSchoolDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name should be a string' })
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Abbreviation is required' })
  @IsString({ message: 'Abbreviation should be a string' })
  readonly abbreviation: string;

  @ApiProperty({ type: [String], example: ['Program A', 'Program B'] })
  @IsArray({ message: 'Programs should be an array' })
  @ArrayMinSize(1, { message: 'At least one program is required' })
  readonly programs: string[];
}
