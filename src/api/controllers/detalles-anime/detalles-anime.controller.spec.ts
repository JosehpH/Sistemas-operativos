import { Test, TestingModule } from '@nestjs/testing';
import { DetallesAnimeController } from './detalles-anime.controller';

describe('DetallesAnimeController', () => {
  let controller: DetallesAnimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetallesAnimeController],
    }).compile();

    controller = module.get<DetallesAnimeController>(DetallesAnimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
