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
import { CreateEpisodeDto } from 'src/api/dtos/CreateEpisodeDto.dto';
import { EpisodiosService } from 'src/service/episodios/episodios.service';
@Controller('episodios')
@ApiTags('Episodios')
export class EpisodiosController {
  constructor(private episodiosService: EpisodiosService) {}
  @Get()
  getAll() {
    return this.episodiosService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.episodiosService.findOne(id);
  }

  @Post()
  @ApiBody({ type: CreateEpisodeDto })
  create(@Body() body: CreateEpisodeDto) {
    return this.episodiosService.create(body);
  }

  @Put(':id')
  @ApiBody({ type: CreateEpisodeDto })
  update(@Param('id') id: number, @Body() body: CreateEpisodeDto) {
    return this.episodiosService.update(id, body);
  }

  @Delete(':id')
  deleted(@Param('id') id: number) {
    return this.episodiosService.delete(id);
  }
}
