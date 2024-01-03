import { LecturerCourses } from "@/modules/lecturer-courses/entities/lecturer-courses.entity";
import { Profile } from "@/modules/users/entities/profile.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lecturer {
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column({unique: true})
    employeeId: string;

    @Column()
    department: string

    @OneToOne(() => Profile, profile => profile.lecturer)
    @JoinColumn()
    profile: Profile;

    @OneToMany(() => LecturerCourses, (lecturerCourses) => lecturerCourses.course)
    lecturerCourses: LecturerCourses[]
}
