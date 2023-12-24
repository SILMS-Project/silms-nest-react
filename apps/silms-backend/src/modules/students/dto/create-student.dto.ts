import { CreateUserDto } from "@/modules/users/dto/create-user.dto";
import { User } from "@/modules/users/entities/user.entity";

export class CreateStudentDto extends CreateUserDto{
    
    matricNo: string;
    department: string;
    programme: string;
    level: string;
}
