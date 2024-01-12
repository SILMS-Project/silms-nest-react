import { Injectable } from '@nestjs/common';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Result } from './entities/result.entity';
import { Repository } from 'typeorm';
import { StudentCoursesService } from '../student-courses/student-courses.service';
import { Grades } from '@/utils/constants';
import { ResultsProps } from './interfaces/result.interface';

@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(Result)
    private readonly resultsRepository: Repository<Result>,
    private studentCoursesService: StudentCoursesService,
  ) {}

  async create(createResultDto: CreateResultDto) {
    const result = await this.resultsRepository.findOneBy({studentCourse: {id: createResultDto.studentCourseId}});
    if (result) {
      throw new Error('Result already exists');
    }

    const resultProps : ResultsProps = {
      ...createResultDto,
      studentCourse: await this.studentCoursesService.find(createResultDto.studentCourseId),
    };
    
    const newResult = this.resultsRepository.create({
      ...resultProps,
    });

    return await this.resultsRepository.save(newResult);
  }

  async findAll() : Promise<Result[]> {
    const results = await this.resultsRepository.find({relations: ['studentCourse', 'studentCourse.student','studentCourse.course']});
    if (!results || results.length === 0) {
      throw new Error('No results found');
    }
    return results;
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
    const studentCourses =
      await this.studentCoursesService.findByStudentId(studentId);

    if (!studentCourses || studentCourses.length === 0) {
      throw new Error('Student Courses not found');
    }

    return await Promise.all(
      studentCourses.map((studentCourse) =>
        this.findByStudentCourse(studentCourse.id),
      ),
    );
  }

  async calculateTotalScoreAndGrade(id: string) {
    const result = await this.findOne(id);
    const { ca1, ca2, ca3, exam } = result;

    if (exam > 65) {
      throw new Error('Exam score cannot be greater than 65');
    }

    if (ca1 > 15 || ca2 > 15 || ca3 > 15) {
      throw new Error('CA score cannot be greater than 15');
    }

    const total = ca1 + ca2 + ca3 + exam;

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

    return await this.resultsRepository.update(id, result).then(() => result);
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

  async remove(id: string) {
    const result = await this.findOne(id);
    return await this.resultsRepository.remove(result);
  }
}
