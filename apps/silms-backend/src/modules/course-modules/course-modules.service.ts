import { Injectable } from '@nestjs/common';
import { CreateCourseModuleDto } from './dto/create-course-module.dto';
import { UpdateCourseModuleDto } from './dto/update-course-module.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseModule } from './entities/course-module.entity';
import { Repository } from 'typeorm';
import { CoursesModuleProps } from './interfaces/courses-modules.interface';
import { CoursesService } from '../courses/courses.service';

@Injectable()
export class CourseModulesService {
  constructor(
    @InjectRepository(CourseModule)
    private readonly courseModuleRepository: Repository<CourseModule>,
    private coursesService: CoursesService,
  ) {}

  async create(createCourseModuleDto: CreateCourseModuleDto) {
    const coursesModuleProps: CoursesModuleProps = {
      ...createCourseModuleDto,
      course: await this.coursesService.findById(
        createCourseModuleDto.courseId,
      ),
    };

    const newCourseModule = this.courseModuleRepository.create({
      ...coursesModuleProps,
    });

    return await this.courseModuleRepository.save(newCourseModule);
  }

  async findAll() {
    return await this.courseModuleRepository.find();
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
