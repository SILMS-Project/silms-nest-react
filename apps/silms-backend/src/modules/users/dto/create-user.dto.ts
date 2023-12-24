import { Role } from "@/utils/constants";

export class CreateUserDto {
    email: string;
    password: string;
    role: Role;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    
}