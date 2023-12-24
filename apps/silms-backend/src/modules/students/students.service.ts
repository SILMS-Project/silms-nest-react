import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { UsersService } from '../users/users.service';
import { Role } from '@/utils/constants';
import { StudentProps } from './interfaces/student.interface';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student) private readonly studentRepository: Repository<Student>,
    private userService: UsersService,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const user = await this.userService.create({
      ...createStudentDto,
      role: Role.Student,
    });

    const newStudent: StudentProps = {
      ...createStudentDto,
      user: user,
    }

    const student = this.findByMatricNo(createStudentDto.matricNo);
    if (student) {
      throw new Error('Student already exists');
    }
    
    return this.studentRepository.save(newStudent);
  }

  findAll() {
    return `This action returns all students`;
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
