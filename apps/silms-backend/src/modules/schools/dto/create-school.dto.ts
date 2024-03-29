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

}
