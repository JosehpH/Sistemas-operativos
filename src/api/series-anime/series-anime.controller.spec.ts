import { Test, TestingModule } from '@nestjs/testing';
import { SeriesAnimeController } from './series-anime.controller';

describe('SeriesAnimeController', () => {
  let controller: SeriesAnimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeriesAnimeController],
    }).compile();

    controller = module.get<SeriesAnimeController>(SeriesAnimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
