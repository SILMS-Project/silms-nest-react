import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LecturerCourses {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: "lecturerId"})
    lecturer: string;

    @Column({"name": "courseId"})
    course: string;
}