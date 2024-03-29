import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Submission } from './entities/submission.entity';
import { Repository } from 'typeorm';
import { SubmissionProps } from './interfaces/submission.interface';
import { AssessmentsService } from '../assessments/assessments.service';
import { StudentsService } from '../students/students.service';
import { Grade } from '../grades/entities/grade.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class SubmissionsService {
  constructor(
    @InjectRepository(Submission)
    private readonly submissionRepository: Repository<Submission>,
    private readonly assessmentService: AssessmentsService,
    private readonly studentService: StudentsService,
  ) {}

  async create(createSubmissionDto: CreateSubmissionDto) {
    const submission = await this.submissionRepository.findOne({
      where: {
        assessment: { id: createSubmissionDto.assessmentId },
        student: { id: createSubmissionDto.studentId },
      },
    });

    if (submission) {
      throw new Error('Submission already exists');
    }

    const submissionProps: SubmissionProps = {
      assessment: await this.assessmentService.findOne(
        createSubmissionDto.assessmentId,
      ),
      student: await this.studentService.findOne(createSubmissionDto.studentId),
      content: createSubmissionDto.content,
      submissionTitle: createSubmissionDto.submissionTitle,
      status: createSubmissionDto.status,
      submissionDate: new Date(),
    };

    const newSubmission = this.submissionRepository.create({
      ...submissionProps,
    });

    return await this.submissionRepository.save(newSubmission);
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
  async findAllStudentSubmissions(studentId: string): Promise<Submission[]> {

    try {
      const submissions = await this.submissionRepository.find({
        where: { student: { id: studentId } },
        relations: ['assessment',],
      });
  
      return submissions;
    } catch (error) {
      throw new Error('Failed to fetch submissions for the student');
    }
  }
    async getSubmissionStatus(submissionId: string): Promise<string> {
      try {
        const submission = await this.submissionRepository.findOne({where:{id:submissionId}});
  
        if (!submission) {
          throw new NotFoundException('Submission not found');
        }
  
        return submission.status;
      } catch (error) {
        throw new NotFoundException('Submission not found');
      }
    }
    async getAllStudentsUserProfilesAndGrades(assessmentId: string): Promise<{
      students: { studentId: string; user:User; grade: Grade }[];
    }> {
      try {
        const submissions = await this.submissionRepository.find({
          where: { assessment: { id: assessmentId } },
          relations: ['grade', 'student', 'student.user'],
        });
  
        if (!submissions || submissions.length === 0) {
          throw new NotFoundException('No submissions found for the specified assessment');
        }
  
        const students = submissions.map((submission) => ({
          studentId: submission.student.id,
          user: submission.student.user,
          grade: submission.grade,
        }));
  
        return { students };
      } catch (error) {
        throw new NotFoundException('Error fetching students profiles and grades');
      }
    }
  async findByAssessmentId(assessmentId: string): Promise<Submission[]> {
    const submissions = await this.submissionRepository.find({
      where: { assessment: { id: assessmentId } },
      relations: ['student', 'student.profile'],
    });
    if (!submissions) {
      throw new Error('Submissions not found');
    }
    return submissions;
  }

  
  async getAssessmentSubmissions(assessmentId: string): Promise<Submission[]> {
    const assessment = await this.assessmentService.findOne( assessmentId );

    if (!assessment) {
      throw new NotFoundException(
        `Assessment with ID ${assessmentId} not found`,
      );
    }

    // Assuming there's a relationship between Assessment and Submission, adjust accordingly
    const submissions = await this.findByAssessmentId(assessmentId);

    return submissions;
  }


  async update(id: string, updateSubmissionDto: UpdateSubmissionDto) {
    const submission = await this.findOne(id);
    return await this.submissionRepository.update(
      submission,
      updateSubmissionDto,
    );
  }

  async remove(id: string) {
    const submission = await this.findOne(id);
    return await this.submissionRepository.remove(submission).then(() => {
      return { deleted: true };
    });
  }
}
