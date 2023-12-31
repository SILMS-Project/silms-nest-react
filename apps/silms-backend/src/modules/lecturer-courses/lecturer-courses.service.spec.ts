import { Test, TestingModule } from '@nestjs/testing';
import { LecturerCoursesService } from './lecturer-courses.service';

describe('LecturerCoursesService', () => {
  let service: LecturerCoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LecturerCoursesService],
    }).compile();

    service = module.get<LecturerCoursesService>(LecturerCoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
