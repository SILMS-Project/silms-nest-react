import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Schedule } from '@/modules/schedules/entities/schedule.entity';
import { Course } from '@/modules/courses/entities/course.entity';

@Entity()
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  sessionName: string;

  @Column({ default: false })
  isCurrentSession: boolean;

  @Column()
  semester: number;

  @OneToMany(() => Schedule, (schedule) => schedule.session)
  schedules: Schedule[];

  @OneToMany(() => Course, (course) => course.session)
  courses: Course[];
}
