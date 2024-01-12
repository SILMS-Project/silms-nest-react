import { Grade } from '@/modules/grades/entities/grade.entity';
import { StudentCourse } from '@/modules/student-courses/entities/student-course.entity';
import { Submission } from '@/modules/submissions/entities/submission.entity';
import { User } from '@/modules/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  matricNo: string;

  @Column()
  department: string;

  @Column()
  programme: string;

  @Column()
  level: string;

  @OneToOne(() => User, (user) => user.student)
  @JoinColumn()
  user: User;

  @OneToMany(() => StudentCourse, (studentCourse) => studentCourse.student)
  studentCourses: StudentCourse[];

  @OneToMany(() => Submission, (submission) => submission.student)
  submissions: Submission[];

  @OneToMany(() => Grade, (grade) => grade.student)
  grades: Grade[];
}
