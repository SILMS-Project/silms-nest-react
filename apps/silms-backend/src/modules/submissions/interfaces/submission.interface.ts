import { Assessment } from "@/modules/assessments/entities/assessment.entity";
import { Grade } from "@/modules/grades/entities/grade.entity";
import { Student } from "@/modules/students/entities/student.entity";
import { SubmissionStatus } from "@/utils/constants";

export interface SubmissionProps {
    id?: string;
    grade?: Grade;
    assessment: Assessment;
    student: Student;
    content: string;
    submissionTitle: string;
    status: SubmissionStatus;
    submissionDate: Date;
}