import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Application } from '@/modules/applications/entities/application.entity';
import { User } from '@/modules/users/entities/user.entity';

@Entity()
export class Applicant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nationalIdentification: string;

  @Column({ type: 'date' })
  dateOfBirth: Date;

  @OneToMany(() => Application, (application) => application.applicant)
  applications: Application[];

  @OneToOne(() => User, (user) => user.applicant)
  @JoinColumn()
  user: User;
}
