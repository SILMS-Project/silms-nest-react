import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { Submission } from '@/modules/submissions/entities/submission.entity';
import { Student } from '@/modules/students/entities/student.entity';

@Entity()
export class Grade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  score: number;

  // @ManyToOne(() => Assessment, assessment => assessment.grades)
  // assessment: Assessment;

  @OneToOne(() => Submission, submission => submission.grade)
  submission: Submission;

  @ManyToOne(() => Student, student => student.grades)
  student: Student;
}
