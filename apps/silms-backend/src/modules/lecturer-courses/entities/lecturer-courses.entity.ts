import { Course } from '@/modules/courses/entities/course.entity';
import { Lecturer } from '@/modules/lecturers/entities/lecturer.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LecturerCourses {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Lecturer, (lecturer) => lecturer.lecturerCourses)
  lecturer: Lecturer;

  @ManyToOne(() => Course, (course) => course.lecturerCourses)
  course: Course;
}
