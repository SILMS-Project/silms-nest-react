import { Injectable } from '@nestjs/common';
import { CreateLecturerCourseDto } from './dto/create-lecturer-course.dto';
import { UpdateLecturerCourseDto } from './dto/update-lecturer-course.dto';
import { LecturerCoursesProps } from './interfaces/lecturer-courses.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { LecturerCourses } from './entities/lecturer-courses.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LecturerCoursesService {

  constructor (@InjectRepository(LecturerCourses) private readonly lecturerCoursesRepository: Repository<LecturerCourses>) {}

  create(createLecturerCourseDto: CreateLecturerCourseDto) {

    const lecturerCoursesProps: LecturerCoursesProps = {
      ...createLecturerCourseDto
    }


    return this.lecturerCoursesRepository.save(lecturerCoursesProps);
  }

  async findAll() {
    return await this.lecturerCoursesRepository.find();
  }

  async findOne(id: string) {
    return await this.lecturerCoursesRepository.findOne({where: {id}});
  }

  update(id: number, updateLecturerCourseDto: UpdateLecturerCourseDto) {
    return `This action updates a #${id} lecturerCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecturerCourse`;
  }
}
