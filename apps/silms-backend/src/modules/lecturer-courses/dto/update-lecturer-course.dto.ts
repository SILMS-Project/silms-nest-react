import { PartialType } from '@nestjs/mapped-types';
import { CreateLecturerCourseDto } from './create-lecturer-course.dto';

export class UpdateLecturerCourseDto extends PartialType(CreateLecturerCourseDto) {}
