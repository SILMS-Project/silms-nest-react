import { Injectable } from '@nestjs/common';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Submission } from './entities/submission.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubmissionsService {
  constructor(
    @InjectRepository(Submission)
    private readonly submissionRepository: Repository<Submission>,
  ) {}

  create(createSubmissionDto: CreateSubmissionDto) {
    return 'This action adds a new submission';
  }

  async findAll() {
    return await this.submissionRepository.find();
  }

  async findOne(id: string) {
    const submission = await this.submissionRepository.findOne({
      where: { id },
    });
    if (!submission) {
      throw new Error('Submission not found');
    }
    return submission;
  }

  async findByAssessmentId(assessmentId: string): Promise<Submission[]> {
    const submissions = await this.submissionRepository.find({
      where: { assessment: { id: assessmentId } },
      relations: ['student', 'student.profile']
    });
    if (!submissions) {
      throw new Error('Submissions not found');
    }
    return submissions;
  }

  async update(id: string, updateSubmissionDto: UpdateSubmissionDto) {
    const submission = await this.findOne(id);
    return await this.submissionRepository.update(submission, updateSubmissionDto);
  }

  async remove(id: string) {
    const submission = await this.findOne(id);
    return await this.submissionRepository.remove(submission).then(() => {
      return { deleted: true };
    });
  }
}
