import { Test, TestingModule } from '@nestjs/testing';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

describe('CoursesController', () => {
  let controller: CoursesController;

  const mockCoursesService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    findAll: jest.fn(() => {
      return [
        {
          id: Date.now(),
          name: 'Test Course',
          description: 'Test Description',
          level: 1,
          program: {
            id: Date.now(),
            name: 'Test Program',
            description: 'Test Description',
          },
        },
      ];
    }),
    findById: jest.fn((id) => {
      return {
        id,
        name: 'Test Course',
        description: 'Test Description',
        level: 1,
        program: {
          id: Date.now(),
          name: 'Test Program',
          description: 'Test Description',
        },
      };
    }),
    findCourseByProgram: jest.fn((id) => {
      return [
        {
          id: Date.now(),
          name: 'Test Course',
          description: 'Test Description',
          level: 1,
          program: {
            id,
            name: 'Test Program',
            description: 'Test Description',
          },
        },
      ];
    }),
    findCourseByLevel: jest.fn((level) => {
      return [
        {
          id: Date.now(),
          name: 'Test Course',
          description: 'Test Description',
          level,
          program: {
            id: Date.now(),
            name: 'Test Program',
            description: 'Test Description',
          },
        },
      ];
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursesController],
      providers: [CoursesService],
    })
      .overrideProvider(CoursesService)
      .useValue(mockCoursesService)
      .compile();

    controller = module.get<CoursesController>(CoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
