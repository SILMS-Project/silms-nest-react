import { IsNotEmpty, IsBoolean, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSessionDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  sessionName: string;

  @ApiProperty()
  @IsBoolean()
  isCurrentSession: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  semester: number;
}
