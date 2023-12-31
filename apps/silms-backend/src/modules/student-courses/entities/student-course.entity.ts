import { Course } from '@/modules/courses/entities/course.entity';
import { Student } from '@/modules/students/entities/student.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';


@Entity()
export class StudentCourse {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  enrollmentDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  completionDate: Date;

  @Column({ nullable: true })
  grade: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  progress: number;

  @Column({ nullable: true })
  attendance: boolean;

  @ManyToOne(() => Student, student => student.studentCourses)
  student: Student;

  @ManyToOne(() => Course, course => course.studentCourses)
  course: Course;
}
