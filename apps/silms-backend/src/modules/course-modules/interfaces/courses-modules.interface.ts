import { Course } from "@/modules/courses/entities/course.entity";

export interface CoursesModuleProps {
    id?: string;
    moduleNumber: number;
    moduleTitle: string;
    course: Course;
}