import { Role } from "@/utils/constants";


export interface UserProps {
    id?: string;
    email?: string;
    password?: string;
    cpassword?: string;
    isVerified?: boolean;
    role?: Role;
    createdAt?: Date;
    updatedAt?: Date;
  }