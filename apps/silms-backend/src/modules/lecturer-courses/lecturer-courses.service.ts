import { Injectable } from '@nestjs/common';
import { CreateLecturerCourseDto } from './dto/create-lecturer-course.dto';
import { UpdateLecturerCourseDto } from './dto/update-lecturer-course.dto';
import { LecturerCoursesProps } from './interfaces/lecturer-courses.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { LecturerCourses } from './entities/lecturer-courses.entity';
import { Repository } from 'typeorm';
import { LecturersService } from '../lecturers/lecturers.service';
import { CoursesService } from '../courses/courses.service';

@Injectable()
export class LecturerCoursesService {
  constructor(
    @InjectRepository(LecturerCourses)
    private readonly lecturerCoursesRepository: Repository<LecturerCourses>,
    private lecturersService: LecturersService,
    private coursesService: CoursesService,
  ) {}

  async create(createLecturerCourseDto: CreateLecturerCourseDto) {

    const lecturerCourse = this.lecturerCoursesRepository.findOne({
      where: {
        course: createLecturerCourseDto.courseId,
        lecturer: createLecturerCourseDto.lecturerId,
      },
    });

    if (lecturerCourse) {
      throw new Error("Already exists!")
    }

    const lecturerCoursesProps: LecturerCoursesProps = {
      lecturer: await this.lecturersService.findById(
        createLecturerCourseDto.lecturerId,
      ),
      course: await this.coursesService.findById(
        createLecturerCourseDto.courseId,
      ),
    };

    const newLecturerCourse = this.lecturerCoursesRepository.create({
      lecturer: lecturerCoursesProps.lecturer.id,
      course: lecturerCoursesProps.course.id,
    });

    return this.lecturerCoursesRepository.save(newLecturerCourse);
  }

  async findAll() {
    return await this.lecturerCoursesRepository.find();
  }

  async findById(id: string) {
    const lecturerCourse = await this.lecturerCoursesRepository.findOne({
      where: { id },
    });
    console.log(lecturerCourse);

    if (!lecturerCourse) {
      throw new Error('Lecturer Course not found.');
    }

    return lecturerCourse;
  }

  async findCoursesByLecturer(lecturerId: string) {
    const lecturerCourses = await this.lecturerCoursesRepository.find({
      where: { lecturer: lecturerId },
    });

    return await Promise.all(
      lecturerCourses.map((lecturerCourse) =>
        this.coursesService.findById(lecturerCourse.course),
      ),
    );
  }

  async findLecturersByCourse(courseId: string) {
    const lecturerCourses = await this.lecturerCoursesRepository.find({
      where: { course: courseId },
    });
    const lecturer = await Promise.all(
      lecturerCourses.map((lecturerCourse) =>
        this.lecturersService.findById(lecturerCourse.lecturer),
      ),
    );

    return lecturer;
  }

  async findByLecturerId(lecturerId: string) {
    return await this.lecturersService.findById(lecturerId);
  }

  async findByCourseId(courseId: string) {
    return await this.coursesService.findById(courseId);
  }

  async unassignLectureToCourse(
    createLecturerCourseDto: CreateLecturerCourseDto,
  ) {
    const lecturerCourse = await this.lecturerCoursesRepository.findOne({
      where: {
        lecturer: createLecturerCourseDto.lecturerId,
        course: createLecturerCourseDto.courseId,
      },
    });

    this.remove(lecturerCourse.id);
  }

  update(id: string, updateLecturerCourseDto: UpdateLecturerCourseDto) {
    return `This action updates a #${id} lecturerCourse`;
  }

  async remove(id: string) {
    const lecturerCourse = await this.findById(id);
    return this.lecturerCoursesRepository.remove(lecturerCourse).then(() => {
      return 'Entry removed successfully.';
    });
  }
}
