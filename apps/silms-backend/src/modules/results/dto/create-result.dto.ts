import { Grades } from '@/utils/constants';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateResultDto {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly ca1?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly ca2?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly ca3?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly exam?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly total?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly grade?: Grades;

  @ApiProperty()
  @IsNotEmpty({ message: 'Student Course ID is required' })
  @IsUUID()
  readonly studentCourseId: string;
}
