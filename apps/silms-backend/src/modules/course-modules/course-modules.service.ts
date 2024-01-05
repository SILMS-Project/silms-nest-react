import { Injectable } from '@nestjs/common';
import { CreateCourseModuleDto } from './dto/create-course-module.dto';
import { UpdateCourseModuleDto } from './dto/update-course-module.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseModule } from './entities/course-module.entity';
import { Repository } from 'typeorm';
import { error } from 'console';

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

  async findOne(id: string) {
    const courseModule = await this.courseModuleRepository.findOne({where:{id}});

    if(!courseModule) {
      throw new error("Module not found");
    }
    return courseModule;
  }

  update(id: number, updateCourseModuleDto: UpdateCourseModuleDto) {
    return `This action updates a #${id} courseModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseModule`;
  }
}
