import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Profile } from '../entities/profile.entity';

describe('UsersService', () => {
  let service: UsersService;

  const mockUsersRepository = {};
  const mockHashProvider = {};
  const mockProfileRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUsersRepository,
        },
        {
          provide: 'HashProvider',
          useValue: mockHashProvider,
        },
        {
          provide: getRepositoryToken(Profile),
          useValue: mockProfileRepository,
        }
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
