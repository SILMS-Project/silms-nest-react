import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { Assessment } from '@/modules/assessments/entities/assessment.entity';
import { Grade } from '@/modules/grades/entities/grade.entity';
import { Student } from '@/modules/students/entities/student.entity';

@Entity()
export class Submission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  submissionTitle: string;

  @Column()
  content: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  submissionDate: Date;

  @ManyToOne(() => Assessment, assessment => assessment.submissions)
  assessment: Assessment;

  @OneToOne(() => Grade, grade => grade.submission)
  grade: Grade;

  @ManyToOne(() => Student, student => student.submissions)
  student: Student;
}
