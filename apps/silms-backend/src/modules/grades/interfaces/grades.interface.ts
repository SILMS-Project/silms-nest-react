import { Student } from "@/modules/students/entities/student.entity";
import { Submission } from "@/modules/submissions/entities/submission.entity";

export interface GradesProps {
    score?: number;
    submission: Submission;
    student: Student;
}