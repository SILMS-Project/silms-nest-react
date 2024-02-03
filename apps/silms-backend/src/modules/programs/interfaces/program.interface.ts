import { School } from "@/modules/schools/entities/school.entity";

export interface ProgramProps {
    id?: string;
    programName: string;
    description: string;
    requirements: string;
    school: School;
}