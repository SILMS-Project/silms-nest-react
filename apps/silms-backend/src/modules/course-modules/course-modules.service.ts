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

  async update(id: string, updateCourseModuleDto: UpdateCourseModuleDto): Promise<CourseModule> {
    const existingCourseModule = await this.courseModuleRepository.findOne({where:{id:id}});

    if (!existingCourseModule) {
      throw new Error(`Course module with id ${id} not found`);
    }
    // Update the properties of the existing course module with data from the DTO
    Object.assign(existingCourseModule, updateCourseModuleDto);

    // Save the updated course module
    const updatedCourseModule = await this.courseModuleRepository.save(existingCourseModule);
    
    return updatedCourseModule;
  }


  remove(id: number) {
    return `This action removes a #${id} courseModule`;
  }
}
