import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CourseModule } from '@/modules/course-modules/entities/course-module.entity';
import { Submission } from '@/modules/submissions/entities/submission.entity';
import { Grade } from '@/modules/grades/entities/grade.entity';

@Entity()
export class Assessment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  content: string;

  @Column()
  totalGrade: number;

  @ManyToOne(() => CourseModule, (courseModule) => courseModule.assessments)
  courseModule: CourseModule;

  @OneToMany(() => Submission, (submission) => submission.assessment)
  submissions: Submission[];

  @OneToMany(() => Grade, (grade) => grade.assessment)
  grades: Grade[];
}
