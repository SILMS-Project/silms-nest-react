import { CourseModule } from "@/modules/course-modules/entities/course-module.entity";
import { Submission } from "@/modules/submissions/entities/submission.entity";

export interface AssessmentProps {
    id?: string;
    title: string;
    description?: string;
    content: string;
    totalGrade: number;
    courseModule: CourseModule;
    submissions?: Submission[];
    createdAt?: Date;
    updatedAt?: Date;
}