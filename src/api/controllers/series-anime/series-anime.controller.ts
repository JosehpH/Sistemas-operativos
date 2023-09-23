import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateAnimeDto } from 'src/api/dtos/CreateAnimeDto.dto';
import { SeriesAnimeService } from 'src/service/series-anime/series-anime.service';

@Controller('series-anime')
@ApiTags('Anime')
export class SeriesAnimeController {
  constructor(private readonly seriesAnime: SeriesAnimeService) {}
  @Get()
  getAll() {
    return this.seriesAnime.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.seriesAnime.findOne(id);
  }
  @Get('by_name/:name')
  getByName(@Param('name') name: string) {
    return this.seriesAnime.findByName(name);
  }

  @Post()
  @ApiBody({ type: CreateAnimeDto })
  create(@Body() body: CreateAnimeDto) {
    return this.seriesAnime.create(body);
  }

  @Put(':id')
  @ApiBody({ type: CreateAnimeDto })
  update(@Param('id') id: number, @Body() body: CreateAnimeDto) {
    return this.seriesAnime.update(id, body);
  }

  @Delete(':id')
  deleted(@Param('id') id: number) {
    return this.seriesAnime.delete(id);
  }
}
