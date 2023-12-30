import { Injectable } from '@nestjs/common';
import { CreateLecturerCourseDto } from './dto/create-lecturer-course.dto';
import { UpdateLecturerCourseDto } from './dto/update-lecturer-course.dto';

@Injectable()
export class LecturerCoursesService {
  create(createLecturerCourseDto: CreateLecturerCourseDto) {
    return 'This action adds a new lecturerCourse';
  }

  findAll() {
    return `This action returns all lecturerCourses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lecturerCourse`;
  }

  update(id: number, updateLecturerCourseDto: UpdateLecturerCourseDto) {
    return `This action updates a #${id} lecturerCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecturerCourse`;
  }
}
