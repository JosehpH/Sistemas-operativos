import { ComentariosService } from 'src/service/comentarios/comentarios.service';
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
import { CreateAnimeCommentDto } from 'src/api/dtos/CreateAnimeCommentDto.dto';
import { CreateEpisodeCommentDto } from 'src/api/dtos/CreateEpisodeCommentDto.dto';
@Controller('comentarios')
@ApiTags('Comentarios')
export class ComentariosController {
  constructor(private comentariosService: ComentariosService) {}
  @Get()
  getAll() {
    return this.comentariosService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.comentariosService.findOne(id);
  }

  @Post('anime')
  @ApiBody({ type: CreateAnimeCommentDto })
  createComentarioForAnime(@Body() body: CreateAnimeCommentDto) {
    return this.comentariosService.createComentarioForAnime(body);
  }
  @Post('episodio')
  @ApiBody({ type: CreateEpisodeCommentDto })
  createComentarioForEpisodio(@Body() body: CreateEpisodeCommentDto) {
    return this.comentariosService.createComentarioForEpisodio(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.comentariosService.update(id, body);
  }

  @Delete(':id')
  deleted(@Param('id') id: number) {
    return this.comentariosService.delete(id);
  }
}
