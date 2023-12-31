import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Assessment } from '@/modules/assessments/entities/assessment.entity';
import { Submission } from '@/modules/submissions/entities/submission.entity';

@Entity()
export class Grade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  grade: number;

  @ManyToOne(() => Assessment, assessment => assessment.grades)
  assessment: Assessment;

  @ManyToOne(() => Submission, submission => submission.grade)
  submission: Submission;
}
