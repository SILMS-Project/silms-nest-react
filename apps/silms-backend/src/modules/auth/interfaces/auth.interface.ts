import { Role } from "@/utils/constants";

export interface AuthProps {
    id?: string;
    email: string;
    password: string;
    role: Role;
}