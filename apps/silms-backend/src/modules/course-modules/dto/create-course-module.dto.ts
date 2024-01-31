import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateCourseModuleDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Module number is required' })
  @IsNumber({}, { message: 'Module number should be a number' })
  readonly moduleNumber: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Module title is required' })
  @IsString()
  readonly moduleTitle: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'courseId is required' })
  @IsUUID('4', { message: 'Invalid Course ID format' })
  readonly courseId: string;
}
