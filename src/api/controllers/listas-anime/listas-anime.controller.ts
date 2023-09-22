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
import { CreateListaAnimeDto } from 'src/api/dtos/CreateListaAnimeDto.dto';
import { UpdateListaAnimeDto } from 'src/api/dtos/UpdateListaAnimeDto.dto';
import { ListasAnimeService } from 'src/service/listas-anime/listas-anime.service';
@Controller('listas-anime')
@ApiTags('Listas-Anime')
export class ListasAnimeController {
  constructor(private listasAnimeService: ListasAnimeService) {}
  @Get()
  getAll() {
    return this.listasAnimeService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.listasAnimeService.findOne(id);
  }

  @Post()
  @ApiBody({ type: CreateListaAnimeDto })
  create(@Body() body: CreateListaAnimeDto) {
    return this.listasAnimeService.createListaAnimeByUsuario(body);
  }

  @Put(':id')
  @ApiBody({ type: UpdateListaAnimeDto })
  update(@Param('id') id: number, @Body() body: UpdateListaAnimeDto) {
    return this.listasAnimeService.updateListaAnime(id, body);
  }

  @Delete(':id')
  deleted(@Param('id') id: number) {
    return this.listasAnimeService.delete(id);
  }
}
