import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseContent } from './entities/course-content.entity';
import { CreateCourseContentDto } from './dto/create-course-content.dto';
import { UpdateCourseContentDto } from './dto/update-course-content.dto';

@Injectable()
export class CourseContentsService {
  constructor(
    @InjectRepository(CourseContent)
    private readonly courseContentRepository: Repository<CourseContent>,
  ) {}

  create(createCourseContentDto: CreateCourseContentDto) {
    return 'This action adds a new courseContent';
  }

  findAll() {
    return `This action returns all courseContents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseContent`;
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

  update(id: number, updateCourseContentDto: UpdateCourseContentDto) {
    return `This action updates a #${id} courseContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseContent`;
  }
}
