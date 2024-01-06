import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseContent } from './entities/course-content.entity';
import { CreateCourseContentDto } from './dto/create-course-content.dto';
import { UpdateCourseContentDto } from './dto/update-course-content.dto';
import { CourseContentProps } from './interfaces/course-content.interface';
import { CourseModulesService } from '../course-modules/course-modules.service';

@Injectable()
export class CourseContentsService {
  constructor(
    @InjectRepository(CourseContent)
    private readonly courseContentRepository: Repository<CourseContent>,
    private courseModulesService: CourseModulesService,

  ) {}


  async create(createCourseContentDto: CreateCourseContentDto) {
    const courseContentProps: CourseContentProps = {
      ...createCourseContentDto,
      courseModule: await this.courseModulesService.findOne(
        createCourseContentDto.courseModuleId,
      ),
    };

    const newCourseContent = this.courseContentRepository.create({
      ...courseContentProps,
    });

    return await this.courseContentRepository.save(newCourseContent);
  }

  async findAll() {
    return await this.courseContentRepository.find();
  }

  async findOne(id: string) {
    const courseContent = await this.courseContentRepository.findOne({
      where: { id },
    });
    if (!courseContent) {
      throw new Error('Course content not found');
    }
    return courseContent;
  }

  async findAllByModule(moduleId: string): Promise<CourseContent[]> {
    // Check if the module exists
    const courseContents = await this.courseContentRepository.find({
      where: { courseModule: { id: moduleId } },
    });

    if (!courseContents.length) {
      throw new NotFoundException(
        `No course contents found for module with ID ${moduleId}`,
      );
    }

    return courseContents;
  }
  
  async update(id: string, updateCourseContentDto: UpdateCourseContentDto) {
    const courseContent = await this.findOne(id);
    return await this.courseContentRepository.update(
      courseContent,
      updateCourseContentDto,
    );
  }

  async remove(id: string) {
    const courseContent = await this.findOne(id);
    return await this.courseContentRepository.remove(courseContent);
  }
}
