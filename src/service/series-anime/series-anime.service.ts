import { Injectable } from '@nestjs/common';
import { SeriesAnime } from 'src/domain/model/series-anime/series-anime';

@Injectable()
export class SeriesAnimeService {
  listaUsers: SeriesAnime[] = [
    new SeriesAnime(1, 'Naruto', 'shonen', 15, 'Toei Animation', 'Sinopsis'),
    new SeriesAnime(
      2,
      'Dragon Ball Z',
      'shonen',
      10,
      'Toei Animation',
      'Sinopsis',
    ),
    new SeriesAnime(
      3,
      'Bleach',
      'shonen',
      10,
      'EstudioProducccion',
      'Sinopsis',
    ),
  ];
  getAllUsers() {
    return this.listaUsers;
  }
}
