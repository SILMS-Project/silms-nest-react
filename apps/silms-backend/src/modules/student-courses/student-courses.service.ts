import { Injectable } from '@nestjs/common';
import { CreateStudentCourseDto } from './dto/create-student-course.dto';
import { UpdateStudentCourseDto } from './dto/update-student-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentCourse } from './entities/student-course.entity';

@Injectable()
export class StudentCoursesService {
  constructor(
    @InjectRepository(StudentCourse)
    private readonly studentCourseRepository: Repository<StudentCourse>,
  ) {}

  async create(createStudentCourseDto: CreateStudentCourseDto): Promise<StudentCourse> {
    const createdStudentCourse = this.studentCourseRepository.create(createStudentCourseDto);
    return await this.studentCourseRepository.save(createdStudentCourse);
  }

  findAll() {
    return `This action returns all studentCourses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentCourse`;
  }

  update(id: number, updateStudentCourseDto: UpdateStudentCourseDto) {
    return `This action updates a #${id} studentCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentCourse`;
  }
}
