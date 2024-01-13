import { StudentCourse } from "@/modules/student-courses/entities/student-course.entity";
import { Grades } from "@/utils/constants";

export interface ResultsProps {
    id?: string;
    ca1?: number;
    ca2?: number;
    ca3?: number;
    exam?: number;
    total?: number;
    grade?: Grades;
    studentCourse: StudentCourse;
}