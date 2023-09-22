import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './service/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/ormconfig';
import { Usuarios } from './persistance/model/usuarios.entity';
import { Animes } from './persistance/model/anime.entity';
import { Comentarios } from './persistance/model/comentarios.entity';
import { DetallesAnime } from './persistance/model/detalles-anime.entity';
import { Episodios } from './persistance/model/episodios.entity';
import { ListasAnime } from './persistance/model/listas-anime.entity';
import { TiposAnime } from './persistance/model/tipos-anime.entity';
import { ComentariosService } from './service/comentarios/comentarios.service';
import { DetallesAnimeService } from './service/detalles-anime/detalles-anime.service';
import { EpisodiosService } from './service/episodios/episodios.service';
import { ListasAnimeService } from './service/listas-anime/listas-anime.service';
import { ComentariosController } from './api/controllers/comentarios/comentarios.controller';
import { UsersController } from './api/controllers/users/users.controller';
import { SeriesAnimeController } from './api/controllers/series-anime/series-anime.controller';
import { EpisodiosController } from './api/controllers/episodios/episodios.controller';
import { DetallesAnimeController } from './api/controllers/detalles-anime/detalles-anime.controller';
import { ListasAnimeController } from './api/controllers/listas-anime/listas-anime.controller';
import { SeriesAnimeService } from './service/series-anime/series-anime.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([
      Usuarios,
      DetallesAnime,
      Animes,
      Comentarios,
      Episodios,
      ListasAnime,
      TiposAnime,
    ]),
  ],
  controllers: [
    AppController,
    UsersController,
    SeriesAnimeController,
    ComentariosController,
    DetallesAnimeController,
    EpisodiosController,
    ListasAnimeController,
  ],
  providers: [
    AppService,
    UsersService,
    SeriesAnimeService,
    ComentariosService,
    DetallesAnimeService,
    EpisodiosService,
    ListasAnimeService,
  ],
})
export class AppModule {}
