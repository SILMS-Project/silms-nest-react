import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LecturerCoursesService } from './lecturer-courses.service';
import { CreateLecturerCourseDto } from './dto/create-lecturer-course.dto';
import { UpdateLecturerCourseDto } from './dto/update-lecturer-course.dto';

@Controller('lecturer-courses')
export class LecturerCoursesController {
  constructor(private readonly lecturerCoursesService: LecturerCoursesService) {}

  @Post()
  create(@Body() createLecturerCourseDto: CreateLecturerCourseDto) {
    return this.lecturerCoursesService.create(createLecturerCourseDto);
  }

  @Get()
  findAll() {
    return this.lecturerCoursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lecturerCoursesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLecturerCourseDto: UpdateLecturerCourseDto) {
    return this.lecturerCoursesService.update(+id, updateLecturerCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lecturerCoursesService.remove(+id);
  }
}
