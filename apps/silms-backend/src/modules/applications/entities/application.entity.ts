import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Applicant } from '@/modules/applicants/entities/applicant.entity';
import { ApplicationStatus } from '@/utils/constants';

@Entity()
export class Application {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  applicationDate: Date;

  @Column({
    type: 'enum',
    enum: ApplicationStatus,
    default: ApplicationStatus.PENDING,
  })
  status: ApplicationStatus;

  @Column({ nullable: true })
  essay: string;

  @Column({ type: 'json', nullable: true })
  jambScores: { [subject: string]: number };

  @Column({ nullable: true })
  totalJambScore: number;

  @Column({ type: 'json', nullable: true })
  waecScores: { [subject: string]: number };

  @Column({ nullable: true })
  totalWaecScore: number;

  @ManyToOne(() => Applicant, (applicant) => applicant.applications)
  @JoinColumn()
  applicant: Applicant;
}
