import { LecturerCourses } from '@/modules/lecturer-courses/entities/lecturer-courses.entity';
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
export class Lecturer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  employeeId: string;

  @Column()
  department: string;

  @OneToOne(() => User, (user) => user.lecturer)
  @JoinColumn()
  user: User;

  @OneToMany(() => LecturerCourses, (lecturerCourses) => lecturerCourses.course)
  lecturerCourses: LecturerCourses[];
}
