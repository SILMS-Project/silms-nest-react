import { Injectable } from '@nestjs/common';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Result } from './entities/result.entity';
import { Repository } from 'typeorm';
import { StudentCoursesService } from '../student-courses/student-courses.service';

@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(Result)
    private readonly resultsRepository: Repository<Result>,
    private studentCoursesService: StudentCoursesService,
  ) {}

  create(createResultDto: CreateResultDto) {
    return 'This action adds a new result';
  }

  findAll() {
    return `This action returns all results`;
  }

  findOne(id: number) {
    return `This action returns a #${id} result`;
  }

  async findByStudentCourse(studentCourseId: string) {
    const studentCourse = await this.resultsRepository.findOne({
      where: {studentCourse: { id: studentCourseId }},
      relations: ['studentCourse'],
    });

    if (!studentCourse) {
      throw new Error('Student Course not found');
    }

    return studentCourse;
  }

  async findByStudentId(studentId: string) {
    const studentCourses =
      await this.studentCoursesService.findByStudentId(studentId);

    return await Promise.all(
      studentCourses.map((studentCourse) => {
        this.findByStudentCourse(studentCourse.id);
      }),
    );
  }

  update(id: number, updateResultDto: UpdateResultDto) {
    return `This action updates a #${id} result`;
  }

  remove(id: number) {
    return `This action removes a #${id} result`;
  }
}
