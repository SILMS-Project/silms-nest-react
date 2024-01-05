import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateGradeDto {
  @ApiProperty({ required: false })
  @IsNotEmpty({ message: 'Grade is required' })
  @IsNumber({}, { message: 'Grade should be a number' })
  readonly grade?: number;
}
