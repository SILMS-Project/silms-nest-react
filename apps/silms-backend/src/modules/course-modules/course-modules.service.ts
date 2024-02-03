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
    const coursemodule = await this.courseModuleRepository.findOneBy({moduleTitle: createCourseModuleDto.moduleTitle, course: {id: createCourseModuleDto.courseId}});
    if (coursemodule) {
      throw new Error('Course already exists');
    }

    const course = await this.coursesService.findById(
      createCourseModuleDto.courseId,
    )
    if (!course) {
      throw new Error(
        `Course with id ${createCourseModuleDto.courseId} does not exist`,
      );
    }

    const courseModuleProps = {
    ...createCourseModuleDto,
      course: course,
    };

    const newCourseModule = this.courseModuleRepository.create({...courseModuleProps});
    // Additional logic 
    const savedCourseModule = await this.courseModuleRepository.save(newCourseModule);
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

  async findAllWithContents(): Promise<CourseModule[]> {
    return this.courseModuleRepository.find({ relations: ['courseContents'] });
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
