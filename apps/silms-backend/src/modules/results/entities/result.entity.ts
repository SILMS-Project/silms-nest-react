import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';
import { StudentCourse } from '@/modules/student-courses/entities/student-course.entity';

@Entity()
export class Result {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true, default: 0 })
  ca1: number;

  @Column({ nullable: true, default: 0 })
  ca2: number;

  @Column({ nullable: true, default: 0 })
  ca3: number;

  @Column({ nullable: true, default: 0 })
  exam: number;

  @Column({ nullable: true, default: 0 })
  total: number;

  @Column({ nullable: true})
  grade: string;

  @OneToOne(() => StudentCourse, studentCourse => studentCourse.result)
  @JoinColumn()
  studentCourse: StudentCourse;
}
