import { Injectable } from '@nestjs/common';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Result } from './entities/result.entity';
import { Repository } from 'typeorm';
import { StudentCoursesService } from '../student-courses/student-courses.service';
import { Grades } from '@/utils/constants';

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

  async findOne(id: string) {
    const result = await this.resultsRepository.findOne({ where: { id } });

    if (!result) {
      throw new Error('Result not found');
    }

    return result;
  }

  async findByStudentCourse(studentCourseId: string) {
    const result = await this.resultsRepository.findOne({
      where: { studentCourse: { id: studentCourseId } },
      relations: ['studentCourse'],
    });

    if (!result) {
      throw new Error('Student Course not found');
    }

    return result;
  }

  async findByStudentId(studentId: string): Promise<Result[]> {
    const studentCourses =
      await this.studentCoursesService.findByStudentId(studentId);

    return await Promise.all(
      studentCourses.map((studentCourse) =>
        this.findByStudentCourse(studentCourse.id),
      )
    );
  }

  async calculateScore(id: string) {
    const result = await this.findOne(id);
    result.total = result.ca1 + result.ca2 + result.ca3;

    if (result.total >= 70) {
      result.grade = Grades.A.toString();
    } else if (result.total >= 60 && result.total < 70) {
      result.grade = Grades.B.toString();
    } else if (result.total >= 50 && result.total < 60) {
      result.grade = Grades.C.toString();
    } else if (result.total >= 45 && result.total < 50) {
      result.grade = Grades.D.toString();
    } else if (result.total >= 0 && result.total < 45) {
      result.grade = Grades.F.toString();
    }

    return await this.resultsRepository.update(id, result);
  }

  async calculateGPAByStudentId(studentId: string) {
    const results = await this.findByStudentId(studentId);
    const gpa = 0;
    const totalGrade = 0;

    results.map((result) => {
      if (result.grade === Grades.A.) {
        totalGrade
      }
    })
  }

  async update(id: string, updateResultDto: UpdateResultDto) {
    const result = await this.findOne(id);
    return await this.resultsRepository.update(result, updateResultDto);
  }

  remove(id: number) {
    return `This action removes a #${id} result`;
  }
}
