import { CreateUserDto } from "@/modules/users/dto/create-user.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateStudentDto extends CreateUserDto{

    @ApiProperty()
    @IsNotEmpty({ message: 'Matric number is required'})
    @IsString()
    matricNo: string;
    
    @ApiProperty()
    @IsNotEmpty({ message: 'Department is required'})
    department: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Programme is required'})
    programme: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Level is required'})
    level: string;
}
