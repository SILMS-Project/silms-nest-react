import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Program } from '../programs/entities/program.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(@InjectRepository(Course) private readonly courseRepository: Repository<Course>,
  @InjectRepository(Program) private readonly programRepository: Repository<Program>,){}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const course = new Course();
    course.courseCode = createCourseDto.courseCode;
    course.courseTitle = createCourseDto.courseTitle;
    course.unit = createCourseDto.unit;
    course.semester = createCourseDto.semester;
    course.description = createCourseDto.description || null;
    course.image = createCourseDto.image || null;
    const program = await this.programRepository.findOne({where:{id:createCourseDto.programId},});
    if (!program) {
      throw new Error(`Program with id ${createCourseDto.programId} not found`);
    }
    course.program = program;
    const savedCourse = await this.courseRepository.save(course);

    return savedCourse;
  }


  findAll() {
    return `This action returns all courses`;
  }

  async findById(id: string) {
    const course = await this.courseRepository.findOne({where: {id}});

    if (!course) {
      throw new Error("Course not found.")
    }

    return course;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
