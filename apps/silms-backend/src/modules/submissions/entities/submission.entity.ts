import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { Assessment } from '@/modules/assessments/entities/assessment.entity';
import { Grade } from '@/modules/grades/entities/grade.entity';

@Entity()
export class Submission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  submissionTitle: string;

  @Column()
  content: string;

  @ManyToOne(() => Assessment, assessment => assessment.submissions)
  assessment: Assessment;

  @OneToOne(() => Grade, grade => grade.submission)
  grade: Grade;
}
