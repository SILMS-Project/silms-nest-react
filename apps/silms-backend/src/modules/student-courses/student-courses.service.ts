import { Injectable, NotFoundException } from '@nestjs/common';
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

  async create(
    createStudentCourseDto: CreateStudentCourseDto,
  ): Promise<StudentCourse> {
    const createdStudentCourse = this.studentCourseRepository.create(
      createStudentCourseDto,
    );
    return await this.studentCourseRepository.save(createdStudentCourse);
  }

  findAll() {
    return `This action returns all studentCourses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentCourse`;
  }

  async findByStudentId(studentId: string): Promise<StudentCourse[]> {
    const studentCourse = await this.studentCourseRepository.find({
      where: { student: { id: studentId }},
      relations: ['student', 'course']
    });

    if (!studentCourse) {
      throw new Error("Student Course not found")
    }

    return studentCourse;
  }

  update(id: number, updateStudentCourseDto: UpdateStudentCourseDto) {
    return `This action updates a #${id} studentCourse`;
  }

  async remove(id: string): Promise<StudentCourse> {
    const studentCourse = await this.studentCourseRepository.findOne({
      where: { id },
    });
    if (!studentCourse) {
      throw new NotFoundException(`Student course with ID ${id} not found`);
    }
    return await this.studentCourseRepository.remove(studentCourse);
  }
}
