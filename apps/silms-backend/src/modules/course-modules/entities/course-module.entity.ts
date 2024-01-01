import { Assessment } from '@/modules/assessments/entities/assessment.entity';
import { CourseContent } from '@/modules/course-contents/entities/course-content.entity';
import { Course } from '@/modules/courses/entities/course.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class CourseModule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  moduleNumber: number;

  @Column()
  moduleTitle: string;

  @ManyToOne(() => Course, (course) => course.courseModules)
  course: Course;

  @OneToMany(() => CourseContent, (courseContent) => courseContent.courseModule)
  courseContents: CourseContent[];

  @OneToMany(() => Assessment, (assessment) => assessment.courseModule)
  assessments: Assessment[];
}
