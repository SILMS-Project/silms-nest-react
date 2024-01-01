import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Program } from '@modules/programs/entities/program.entity';
import { StudentCourse } from '@/modules/student-courses/entities/student-course.entity';
import { CourseModule } from '@/modules/course-modules/entities/course-module.entity';
import { CourseType } from '@/utils/constants';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  courseCode: string;

  @Column()
  courseTitle: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({default: CourseType.COMPULSORY})
  courseType: CourseType;

  @Column({ type: 'int' })
  unit: number;

  @Column({type:'int'})
  level:number;

  @Column({ type: 'int' })
  semester: number;

  @Column({ type: 'text', nullable: true })
  image: string;


  @ManyToOne(() => Program, program => program.courses)
  program: Program;

  @OneToMany(() => CourseModule, courseModule => courseModule.course)
  courseModules: CourseModule[];

  @OneToMany(() => StudentCourse, studentCourse => studentCourse.course)
  studentCourses: StudentCourse[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

}
