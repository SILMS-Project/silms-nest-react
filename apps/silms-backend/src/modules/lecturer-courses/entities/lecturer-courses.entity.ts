import { Lecturer } from "@/modules/lecturers/entities/lecturer.entity";
import { Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LecturerCourses {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne( ()=> Lecturer, lecturer => lecturer.lecturerCourses)
    @JoinColumn()
    lecturer: Lecturer;
}