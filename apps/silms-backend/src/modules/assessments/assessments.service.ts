/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { UpdateAssessmentDto } from './dto/update-assessment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Assessment } from './entities/assessment.entity';
import { Submission } from '../submissions/entities/submission.entity'; // Import Submission entity
import { Repository } from 'typeorm';
import { SubmissionsService } from '../submissions/submissions.service';

@Injectable()
export class AssessmentsService {
  constructor(
    @InjectRepository(Assessment)
    private readonly assessmentRepository: Repository<Assessment>,
  ) {}

  async create(createAssessmentDto: CreateAssessmentDto): Promise<Assessment> {
    const assessment = this.assessmentRepository.create(createAssessmentDto);
    // Additional logic
    const savedAssessment = await this.assessmentRepository.save(assessment);
    return savedAssessment;
  }

  async findAll(): Promise<Assessment[]> {
    return await this.assessmentRepository.find();
  }

  async findOne(id: string): Promise<Assessment> {
    const assessment = await this.assessmentRepository.findOne({where: { id }, relations: ['courseModule', 'courseModule.course'], });
    if(!assessment){
      throw new Error('Assessment not found');
    }
  return assessment;
  }

 async findByCourse(courseId:string):Promise<Assessment[]>{

  const assessments = await this.assessmentRepository.find({
    where: {
      courseModule: {
        course: { id: courseId },
      },
    },
    relations: ['courseModule', 'courseModule.course'],
  });
  
  if (!assessments || assessments.length === 0) {
    throw new Error('No assessments found for the given course');
  }
  
  return assessments;
}
async getAssessmentGrade(assessmentId: string): Promise<number> {
  try {
    const assessment = await this.assessmentRepository.findOne({where:{id:assessmentId}});

    if (!assessment) {
      throw new NotFoundException('Assessment not found');
    }

    const totalGrade = assessment.totalGrade;

    return totalGrade;
  } catch (error) {
    throw new NotFoundException('Error fetching assessment total grade');
  }
}

  async update(id: string, updateAssessmentDto: UpdateAssessmentDto) {
    const assessment = await this.findOne(id);
    return await this.assessmentRepository.update(
      assessment,
      updateAssessmentDto,
    );
  }

  async remove(id: string): Promise<any> {
    const assessment = await this.findOne(id);
    return await this.assessmentRepository.remove(assessment).then(() => {
      return { deleted: true };
    });
  }
}
