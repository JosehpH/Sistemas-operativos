import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './api/users/users.controller';
import { UsersService } from './service/users/users.service';
import { SeriesAnimeController } from './api/series-anime/series-anime.controller';
import { SeriesAnimeService } from './service/series-anime/series-anime.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, SeriesAnimeController],
  providers: [AppService, UsersService, SeriesAnimeService],
})
export class AppModule {}
