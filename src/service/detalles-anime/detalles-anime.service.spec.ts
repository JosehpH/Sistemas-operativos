import { Test, TestingModule } from '@nestjs/testing';
import { DetallesAnimeService } from './detalles-anime.service';

describe('DetallesAnimeService', () => {
  let service: DetallesAnimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetallesAnimeService],
    }).compile();

    service = module.get<DetallesAnimeService>(DetallesAnimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
