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
      relations: ['studentCourse', 'studentCourse.course'],
    });

    if (!result) {
      throw new Error('Student Course not found');
    }

    return result;
  }

  async findByStudentId(studentId: string): Promise<Result[]> {
    const studentCourses = await this.studentCoursesService.findByStudentId(studentId);
  
    if (studentCourses.length === 0) {
      throw new Error('No courses found for the student');
    }
  
    const results = await Promise.all(
      studentCourses.map(async (studentCourse) => {
        try {
          return await this.findByStudentCourse(studentCourse.id);
        } catch (error) {
          
          console.error(`Error finding result for student course ${studentCourse.id}: ${error.message}`);
          return null; 
        }
      }),
    );
    const validResults = results.filter((result) => result !== null);
  
    if (validResults.length === 0) {
      throw new Error('No valid results found for the student');
    }
  
    return validResults;
  }
  async calculateTotalScore(id: string) {
    const result = await this.findOne(id);
    const { ca1, ca2, ca3 } = result;
    const total = ca1 + ca2 + ca3;

    const grade =
      total >= 70
        ? Grades.A
        : total >= 60
          ? Grades.B
          : total >= 50
            ? Grades.C
            : total >= 45
              ? Grades.D
              : Grades.F;

    result.total = total;
    result.grade = grade;

    return await this.resultsRepository.update(id, result);
  }

  async calculateGPAByStudentId(studentId: string) {
    const results = await this.findByStudentId(studentId);
    let totalPoints: number = 0;

    const gradePoints = {
      [Grades.A]: 4,
      [Grades.B]: 3,
      [Grades.C]: 2,
      [Grades.D]: 1,
      [Grades.F]: 0,
    };

    results.map((result) => {
      totalPoints +=
        gradePoints[result.grade] * result.studentCourse.course.unit;
      console.log(result.studentCourse.course.unit);
    });

    const gpaResult = totalPoints / results.length;

    return { GPA: gpaResult.toFixed(2) };
  }

  async update(id: string, updateResultDto: UpdateResultDto) {
    const result = await this.findOne(id);
    return await this.resultsRepository.update(result, updateResultDto);
  }

  remove(id: number) {
    return `This action removes a #${id} result`;
  }
}
