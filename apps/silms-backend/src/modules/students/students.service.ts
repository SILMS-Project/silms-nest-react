import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { UsersService } from '../users/services/users.service';
import { StudentProps } from './interfaces/student.interface';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student) private readonly studentRepository: Repository<Student>,
    private userService: UsersService,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const student = await this.findByMatricNo(createStudentDto.matricNo);
  
    if (student) {
      throw new Error('Student already exists');
    }

    const newUser = await this.userService.create({
      ...createStudentDto
    });

    const studentProps: StudentProps = {
      ...createStudentDto
    }

    const newStudent = this.studentRepository.create({
      ...studentProps,
      profile: newUser.profile
    });
    
    return this.studentRepository.save(newStudent);
  }

  async findAll() : Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async findByMatricNo(matricNo: string) {
    return await this.studentRepository.findOne({ where: { matricNo } });
  }

  async findOne(id: string) {
    return await this.studentRepository.findOne({ where: { id } }); 
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    const student = this.findOne(id);

    if (!student) {
      throw new Error('Student not found');
    }
    return this.studentRepository.update(id, updateStudentDto);
  }

  remove(id: string) {
    const student = this.findOne(id);
    if (!student) {
      throw new Error('Student not found');
    }
    return this.studentRepository.delete(id);
  }
}
