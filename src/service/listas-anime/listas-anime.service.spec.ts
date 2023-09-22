import { Test, TestingModule } from '@nestjs/testing';
import { ListasAnimeService } from './listas-anime.service';

describe('ListasAnimeService', () => {
  let service: ListasAnimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListasAnimeService],
    }).compile();

    service = module.get<ListasAnimeService>(ListasAnimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
