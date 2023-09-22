import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DetallesAnimeService } from 'src/service/detalles-anime/detalles-anime.service';
@Controller('detalles-anime')
@ApiTags('Detalles-Anime')
export class DetallesAnimeController {
  constructor(private detallesAnimeService: DetallesAnimeService) {}
  @Get()
  getAll() {
    return this.detallesAnimeService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.detallesAnimeService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.detallesAnimeService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.detallesAnimeService.update(id, body);
  }

  @Delete(':id')
  deleted(@Param('id') id: number) {
    return this.detallesAnimeService.delete(id);
  }
}
