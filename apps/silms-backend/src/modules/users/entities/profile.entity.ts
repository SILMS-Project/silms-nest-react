import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Student } from "@/modules/students/entities/student.entity";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column({nullable: true})
    middleName: string;

    @Column()
    lastName: string;

    @OneToOne(() => User, user => user.profile)
    @JoinColumn()
    user: User;

    @OneToOne(() => Student, (student) => student.profile, {cascade: true})
    student: Student
}