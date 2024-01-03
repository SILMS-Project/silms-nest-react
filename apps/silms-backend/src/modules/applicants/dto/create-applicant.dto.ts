import { IsNotEmpty, IsString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateApplicantDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nationalIdentification: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  dateOfBirth: Date;
}
