import { Injectable } from '@nestjs/common';
import { CreateCourseModuleDto } from './dto/create-course-module.dto';
import { UpdateCourseModuleDto } from './dto/update-course-module.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseModule } from './entities/course-module.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseModulesService {
  constructor(
    @InjectRepository(CourseModule)
    private readonly courseModuleRepository: Repository<CourseModule>,
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

  findOne(id: number) {
    return `This action returns a #${id} courseModule`;
  }

  update(id: number, updateCourseModuleDto: UpdateCourseModuleDto) {
    return `This action updates a #${id} courseModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseModule`;
  }
}
