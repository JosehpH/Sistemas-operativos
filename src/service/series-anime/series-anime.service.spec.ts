import { Test, TestingModule } from '@nestjs/testing';
import { SeriesAnimeService } from './series-anime.service';

describe('SeriesAnimeService', () => {
  let service: SeriesAnimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriesAnimeService],
    }).compile();

    service = module.get<SeriesAnimeService>(SeriesAnimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
