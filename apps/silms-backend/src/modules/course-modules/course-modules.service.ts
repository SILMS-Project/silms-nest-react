import { Injectable } from '@nestjs/common';
import { CreateCourseModuleDto } from './dto/create-course-module.dto';
import { UpdateCourseModuleDto } from './dto/update-course-module.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseModule } from './entities/course-module.entity';
import { Repository } from 'typeorm';
import { CoursesService } from '../courses/courses.service';

@Injectable()
export class CourseModulesService {
  constructor(
    @InjectRepository(CourseModule)
    private readonly courseModuleRepository: Repository<CourseModule>,
    private coursesService: CoursesService,
    // Add other repositories or services as needed
    ) {}

  async create(createCourseModuleDto: CreateCourseModuleDto): Promise<CourseModule> {
    const courseModule = this.courseModuleRepository.create(createCourseModuleDto);
    // Additional logic 
    const savedCourseModule = await this.courseModuleRepository.save(courseModule);
    return savedCourseModule;
  }

  async findAll(): Promise<CourseModule[]> {
    const courseModules = await this.courseModuleRepository.find();
    return courseModules;
  }

  async findOne(id: string) {
    const courseModule = await this.courseModuleRepository.findOne({
      where: { id },
    });
    if (!courseModule) {
      throw new Error('Course module not found');
    }
    return courseModule;
  }

  async update(id: string, updateCourseModuleDto: UpdateCourseModuleDto) {
    const courseModule = await this.findOne(id);
    return await this.courseModuleRepository.update(
      courseModule,
      updateCourseModuleDto,
    );
  }

  async remove(id: string) {
    const courseModule = await this.findOne(id);
    return await this.courseModuleRepository.remove(courseModule).then(() => {
      return { deleted: true };
    });
  }
}
