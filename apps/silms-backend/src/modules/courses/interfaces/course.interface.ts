import { Program } from "@/modules/programs/entities/program.entity";

export interface CourseProps {
    id?: string;
    courseCode: string;
    courseName: string;
    level: number;
    program: Program;
    createdAt: Date;
    updatedAt: Date;
}