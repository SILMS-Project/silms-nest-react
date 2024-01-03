import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Student } from "@/modules/students/entities/student.entity";
import { Lecturer } from "@/modules/lecturers/entities/lecturer.entity";
import { Applicant } from "@/modules/applicants/entities/applicant.entity";

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
    student: Student;
    
    @OneToOne(() => Lecturer, (lecturer) => lecturer.profile, {cascade: true})
    lecturer: Lecturer;

    @OneToOne(() => Applicant, (applicant) => applicant.profile, {cascade: true})
    applicant: Applicant;
    
}