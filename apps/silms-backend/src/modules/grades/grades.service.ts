import { Injectable } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Grade } from './entities/grade.entity';
import { Repository } from 'typeorm';
import { GradesProps } from './interfaces/grades.interface';
import { SubmissionsService } from '../submissions/submissions.service';
import { StudentsService } from '../students/students.service';

@Injectable()
export class GradesService {
  constructor(
    @InjectRepository(Grade)
    private readonly gradeRepository: Repository<Grade>,
    private readonly submissionsService: SubmissionsService,
    private readonly studentsService: StudentsService,
  ) {}

  async create(createGradeDto: CreateGradeDto) {
    try {
      const grade = await this.gradeRepository.findOne({
        where: {
          submission: { id: createGradeDto.submissionId },
          student: { id: createGradeDto.studentId },
        },
      });

      if (grade) {
        throw new Error('Grade already exists');
      }

      const gradeProps: GradesProps = {
        ...createGradeDto,
        submission: await this.submissionsService.findOne(createGradeDto.submissionId),
        student: await this.studentsService.findOne(createGradeDto.studentId),
      };

      const newGrade = this.gradeRepository.create({
        ...gradeProps,
      });

      return await this.gradeRepository.save(newGrade);
    } catch (error) {
      return {
        error: true,
        message: error.message,
      };
    }
  }

  async findAll(): Promise<Grade[]> {
    return await this.gradeRepository.find();
  }

  async findOne(id: string): Promise<Grade> {
    const grade = await this.gradeRepository.findOne({
      where: { id },
      relations: ['submission', 'student'],
    });

    if (!grade) {
      throw new Error('Grade not found');
    }
    return grade;
  }

  async update(id: string, updateGradeDto: UpdateGradeDto) {
    const grade = await this.findOne(id);
    return await this.gradeRepository.update(grade, updateGradeDto);
  }

  async remove(id: string) {
    const grade = await this.findOne(id);
    return await this.gradeRepository.remove(grade);
  }
}
