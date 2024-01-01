import { StudentCourse } from '@/modules/student-courses/entities/student-course.entity';
import { Profile } from '@/modules/users/entities/profile.entity';
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

  @OneToOne(() => Profile, (profile) => profile.student)
  @JoinColumn()
  profile: Profile;

  @OneToMany(() => StudentCourse, (studentCourse) => studentCourse.student)
  studentCourses: StudentCourse[];
}
