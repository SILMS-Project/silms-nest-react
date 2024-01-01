import { Course } from "@/modules/courses/entities/course.entity";
import { Profile } from "@/modules/users/entities/profile.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    courses: Course[]
}
