import { Test, TestingModule } from '@nestjs/testing';
import { LecturerCoursesController } from './lecturer-courses.controller';

describe('LecturerCoursesController', () => {
  let controller: LecturerCoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LecturerCoursesController],
    }).compile();

    controller = module.get<LecturerCoursesController>(LecturerCoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
