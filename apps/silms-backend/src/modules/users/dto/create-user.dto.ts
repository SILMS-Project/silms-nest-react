
export class CreateUserDto {
    email: string;
    password: string;
    role: string;
    isVerified?: boolean;
    createdAt: Date;
    updatedAt?: Date;
}