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

  findAll() {
    return `This action returns all submissions`;
  }

  async findOne(id: string) {
    const submission = await this.submissionRepository.findOne({where: {id}})
    if (!submission) {
      throw new Error('Submission not found');
    }
    return submission;
  }

  update(id: number, updateSubmissionDto: UpdateSubmissionDto) {
    return `This action updates a #${id} submission`;
  }

  remove(id: number) {
    return `This action removes a #${id} submission`;
  }
}
