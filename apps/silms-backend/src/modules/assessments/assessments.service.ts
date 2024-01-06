import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { UpdateAssessmentDto } from './dto/update-assessment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Assessment } from './entities/assessment.entity';
import { Submission } from '../submissions/entities/submission.entity';  // Import Submission entity
import { Repository, getRepository, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class AssessmentsService {
  constructor(
    @InjectRepository(Assessment)
    private readonly assessmentRepository: Repository<Assessment>,
    private readonly submissionRepository: Repository<Submission>,  // Add Submission repository
  ) {}

  async create(createAssessmentDto: CreateAssessmentDto): Promise<Assessment> {
    const assessment = this.assessmentRepository.create(createAssessmentDto);
    // Additional logic 
    const savedAssessment = await this.assessmentRepository.save(assessment);
    return savedAssessment;
  }

  findAll() {
    return `This action returns all assessments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assessment`;
  }

  async getAssessmentSubmissions(assessmentId: string): Promise<Submission[]> {
    const assessment = await this.assessmentRepository.findOne({
      where: { id: assessmentId },
    });
  
    if (!assessment) {
      throw new NotFoundException(`Assessment with ID ${assessmentId} not found`);
    }
  
    // Assuming there's a relationship between Assessment and Submission, adjust accordingly
    const submissions = await this.submissionRepository.find({
      where: { assessment: { id: assessmentId } },
    });
  
    return submissions;
  }
  
  

  update(id: number, updateAssessmentDto: UpdateAssessmentDto) {
    return `This action updates a #${id} assessment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assessment`;
  }
}
