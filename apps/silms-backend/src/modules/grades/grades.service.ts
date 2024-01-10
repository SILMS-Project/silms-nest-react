import { Injectable, NotFoundException } from '@nestjs/common';
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
      submission: await this.submissionsService.findOne(
        createGradeDto.submissionId,
      ),
      student: await this.studentsService.findOne(createGradeDto.studentId),
    };

    const newGrade = this.gradeRepository.create({
      ...gradeProps,
    });

    return await this.gradeRepository.save(newGrade);
  }

  async findAll(): Promise<Grade[]> {
    const grades= await this.gradeRepository.find({
    relations: ['submission', 'student', 'student.profile'],
  });

    if (!grades || grades.length === 0) {
      throw new Error('No grades found');
    }

    return grades;
  }

  async findOne(id: string): Promise<Grade> {
    const grade = await this.gradeRepository.findOne({
      where: { id },
      relations: ['submission', 'student', 'student.profile'],
    });

    if (!grade) {
      throw new Error('Grade not found');
    }
    return grade;
  }

  async update(id: string, updateGradeDto: UpdateGradeDto): Promise<Grade> {
    const grade = await this.gradeRepository.findOne({ where: { id } });

    if (!grade) {
      throw new NotFoundException(`Grade with ID ${id} not found`);
    }

    // Update the properties from the DTO
    Object.assign(grade, updateGradeDto);

    // Save the updated grade
    return await this.gradeRepository.save(grade);
  }

  async remove(id: string) {
    const grade = await this.findOne(id);
    return await this.gradeRepository.remove(grade);
  }
}
