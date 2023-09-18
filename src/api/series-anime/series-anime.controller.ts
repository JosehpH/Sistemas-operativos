import { Controller, Get } from '@nestjs/common';
import { SeriesAnimeService } from 'src/service/series-anime/series-anime.service';

@Controller('series-anime')
export class SeriesAnimeController {
  constructor(private readonly seriesAnime: SeriesAnimeService) {}
  @Get()
  getSeriesAnime() {
    return this.seriesAnime.getAllUsers();
  }
}
