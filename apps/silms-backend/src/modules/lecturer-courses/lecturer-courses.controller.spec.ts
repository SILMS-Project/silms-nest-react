import { Test, TestingModule } from '@nestjs/testing';
import { LecturerCoursesController } from './lecturer-courses.controller';
import { LecturerCoursesService } from './lecturer-courses.service';

describe('LecturerCoursesController', () => {
  let controller: LecturerCoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LecturerCoursesController],
      providers: [LecturerCoursesService],
    }).compile();

    controller = module.get<LecturerCoursesController>(
      LecturerCoursesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
