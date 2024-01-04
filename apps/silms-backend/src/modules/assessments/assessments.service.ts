import { Injectable } from '@nestjs/common';
import { CreateAssessmentDto } from './dto/create-assessment.dto';
import { UpdateAssessmentDto } from './dto/update-assessment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Assessment } from './entities/assessment.entity';
import { Repository } from 'typeorm';
import { AssessmentProps } from './interfaces/assessment.interface';
import { CourseModulesService } from '../course-modules/course-modules.service';

@Injectable()
export class AssessmentsService {
  constructor(
    @InjectRepository(Assessment)
    private readonly assessmentRepository: Repository<Assessment>,
    private courseModuleService: CourseModulesService,
  ) {}

  async create(createAssessmentDto: CreateAssessmentDto): Promise<Assessment> {
    const assessmentProps: AssessmentProps = {
      ...createAssessmentDto,
      courseModule: await this.courseModuleService.findOne(
        createAssessmentDto.courseModuleId,
      ),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const assessment = this.assessmentRepository.create(assessmentProps);

    return await this.assessmentRepository.save(assessment);
  }

  async findAll(): Promise<Assessment[]> {
    return await this.assessmentRepository.find();
  }

  async findOne(id: string): Promise<Assessment> {
    const assessment = await this.assessmentRepository.findOne({
      where: { id },
      relations: ['courseModule', 'courseModule.course'],
    });
    if (!assessment) {
      throw new Error('Assessment not found');
    }
    return assessment;
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
