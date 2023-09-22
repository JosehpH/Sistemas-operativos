import { Test, TestingModule } from '@nestjs/testing';
import { ListasAnimeController } from './listas-anime.controller';

describe('ListasAnimeController', () => {
  let controller: ListasAnimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListasAnimeController],
    }).compile();

    controller = module.get<ListasAnimeController>(ListasAnimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
