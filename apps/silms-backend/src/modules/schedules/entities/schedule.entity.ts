import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Course } from '@/modules/courses/entities/course.entity';
import { DayOfWeek } from '@/utils/constants';
import { Session } from '@/modules/sessions/entities/session.entity';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: DayOfWeek })
  dayOfWeek: DayOfWeek;

  @Column()
  startTime: string;

  @Column()
  endTime: string;

  @ManyToOne(() => Course, (course) => course.schedules)
  course: Course;

  @Column()
  room: string;

  @ManyToOne(() => Session, (session) => session.schedules)
  session: Session;
}
