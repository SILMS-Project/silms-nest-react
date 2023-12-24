import { CreateUserDto } from "@/modules/users/dto/create-user.dto";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateLecturerDto extends CreateUserDto{
    @IsNotEmpty()
    @IsString()
    employeeId: string;

    @IsNotEmpty()
    @IsString()
    department: string;
}
