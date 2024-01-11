import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { UsersService } from '../users/users.service';
import { StudentProps } from './interfaces/student.interface';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    private userService: UsersService,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const student = await this.findByMatricNo(createStudentDto.matricNo);

    if (student) {
      throw new Error('Student already exists');
    }

    const newUser = await this.userService.create({
      ...createStudentDto,
    });

    const studentProps: StudentProps = {
      ...createStudentDto,
    };

    const newStudent = this.studentRepository.create({
      ...studentProps,
      profile: newUser.profile,
    });

    return this.studentRepository.save(newStudent);
  }

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.find({ relations: ['profile'] });
  }

  async findByMatricNo(matricNo: string) {
    return await this.studentRepository.findOne({
      where: { matricNo },
      relations: ['profile'],
    });
  }

  async findOne(id: string) {
    const student = await this.studentRepository.findOne({
      where: { id },
      relations: ['profile'],
    });
    if (!student) {
      throw new Error('Student not found');
    }
    return student;
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const student = await this.findOne(id);
    return this.studentRepository.update(student.id, updateStudentDto);
  }

  async remove(id: string) {
    const student = await this.findOne(id);
    return this.studentRepository.delete(student);
  }
}
