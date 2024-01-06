import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { Grade } from './entities/grade.entity';

@Injectable()
export class GradesService {
  gradeRepository: any;
  create(createGradeDto: CreateGradeDto) {
    return 'This action adds a new grade';
  }

  findAll() {
    return `This action returns all grades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grade`;
  }

  async update(id: number, updateGradeDto: UpdateGradeDto): Promise<Grade> {
    const grade = await this.gradeRepository.findOne(id);

    if (!grade) {
      throw new NotFoundException(`Grade with ID ${id} not found`);
    }

    // Update the properties from the DTO
    Object.assign(grade, updateGradeDto);

    // Save the updated grade
    return await this.gradeRepository.save(grade);
  }

  remove(id: number) {
    return `This action removes a #${id} grade`;
  }
}
