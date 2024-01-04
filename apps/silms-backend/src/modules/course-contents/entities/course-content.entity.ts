import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CourseModule } from '@/modules/course-modules/entities/course-module.entity';

@Entity()
export class CourseContent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  content: string;

  @ManyToOne(() => CourseModule, courseModule => courseModule.courseContents)
  courseModule: CourseModule;
}