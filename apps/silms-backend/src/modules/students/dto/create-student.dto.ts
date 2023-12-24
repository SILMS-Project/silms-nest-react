import { CreateUserDto } from "@/modules/users/dto/create-user.dto";
import { User } from "@/modules/users/entities/user.entity";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateStudentDto extends CreateUserDto{
    @IsNotEmpty()
    @IsString()
    matricNo: string;
    
    @IsNotEmpty()
    department: string;

    @IsNotEmpty()
    programme: string;

    @IsNotEmpty()
    level: string;
}
