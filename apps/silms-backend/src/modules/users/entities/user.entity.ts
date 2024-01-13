import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Student } from '@/modules/students/entities/student.entity';
import { Lecturer } from '@/modules/lecturers/entities/lecturer.entity';
import { Applicant } from '@/modules/applicants/entities/applicant.entity';
import { Auth } from '@/modules/auth/entities/auth.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  middleName: string;

  @Column()
  lastName: string;

  @OneToOne(() => Auth, (auth) => auth.user, {cascade: true})
  @JoinColumn()
  auth: Auth;

  @OneToOne(() => Student, (student) => student.user, { cascade: true })
  student: Student;

  @OneToOne(() => Lecturer, (lecturer) => lecturer.user, { cascade: true })
  lecturer: Lecturer;

  @OneToOne(() => Applicant, (applicant) => applicant.user, {
    cascade: true,
  })
  applicant: Applicant;
}
