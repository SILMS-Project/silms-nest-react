import { CourseModule } from "@/modules/course-modules/entities/course-module.entity";

export interface CourseContentProps {
    id?: string;
    title: string;
    description?: string;
    content: string;
    courseModule: CourseModule;
}