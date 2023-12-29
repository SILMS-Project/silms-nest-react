import { User } from "@/modules/users/entities/user.entity";
import { UserProps } from "@/modules/users/interfaces/user.interface";

export interface StudentProps {
    id?: string;
    matricNo: string;
    department: string;
    programme: string;
    level: string;
}