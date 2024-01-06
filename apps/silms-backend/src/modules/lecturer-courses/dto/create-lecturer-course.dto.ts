import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLecturerCourseDto {
  @IsNotEmpty()
  @IsString()
  lecturerId: string;

  @IsNotEmpty()
  @IsString()
  courseId: string;
}
