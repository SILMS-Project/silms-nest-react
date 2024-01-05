import { Course } from '@/modules/courses/entities/course.entity';
import { Lecturer } from '@/modules/lecturers/entities/lecturer.entity';

export interface LecturerCoursesProps {
  id?: string;
  lecturer: Lecturer;
  course: Course;
}
