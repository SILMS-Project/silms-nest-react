import { IsNotEmpty, IsEnum, IsString, IsUUID, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { DayOfWeek } from '@/utils/constants';

export class CreateScheduleDto {
  @ApiProperty({ enum: DayOfWeek, enumName: 'DayOfWeek' })
  @IsNotEmpty()
  @IsEnum(DayOfWeek)
  dayOfWeek: DayOfWeek;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  startTime: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  endTime: string;

  @ApiProperty()
  @IsString()
  room: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Course ID is required' })
  @IsUUID('4', { message: 'Invalid Course ID format' })
  readonly courseId: string;


}
