import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { School } from '@modules/schools/entities/school.entity';
import { Course } from '@modules/courses/entities/course.entity';

@Entity('programs')
export class Program {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  programName: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => Course, course => course.program)
  courses: Course[];

  @Column({ type: 'text', nullable: true })
  requirements: string;

  @ManyToOne(() => School, school => school.programs)
  school: School;
  
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
