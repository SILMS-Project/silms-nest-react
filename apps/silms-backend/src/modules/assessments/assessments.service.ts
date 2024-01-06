import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { UpdateAssessmentDto } from './dto/update-assessment.dto';
import { Submission } from '../submissions/entities/submission.entity';

@Injectable()
export class AssessmentsService {
  assessmentRepository: any;
  create(createAssessmentDto: CreateAssessmentDto) {
    return 'This action adds a new assessment';
  }

  findAll() {
    return `This action returns all assessments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assessment`;
  }

  async getAssessmentSubmissions(assessmentId: string): Promise<Submission[]> {
    const assessment = await this.assessmentRepository.findOne(assessmentId, { relations: ['submissions'] });

    if (!assessment) {
      throw new NotFoundException(`Assessment with ID ${assessmentId} not found`);
    }

    return assessment.submissions;
  }

  update(id: number, updateAssessmentDto: UpdateAssessmentDto) {
    return `This action updates a #${id} assessment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assessment`;
  }
}
