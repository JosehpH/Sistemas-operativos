import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Animes } from 'src/persistance/model/anime.entity';
import { DetallesAnime } from 'src/persistance/model/detalles-anime.entity';
import { CreateAnimeDto } from 'src/api/dtos/CreateAnimeDto.dto';
import { TiposAnime } from 'src/persistance/model/tipos-anime.entity';

@Injectable()
export class SeriesAnimeService {
  constructor(
    @InjectRepository(Animes)
    private animesRepo: Repository<Animes>,
    @InjectRepository(DetallesAnime)
    private detallesRepo: Repository<DetallesAnime>,
    @InjectRepository(TiposAnime)
    private tipoAnimeRepo: Repository<TiposAnime>,
  ) {}
  findAll() {
    return this.animesRepo.find({
      relations: [
        'detalle_anime',
        'lista_episodidos',
        'comentarios',
        'detalle_anime.tipo',
      ],
    });
  }
  findOne(id: number) {
    return this.animesRepo.findOneBy({ id: id });
  }
  async create(body: CreateAnimeDto) {
    const detalle = new DetallesAnime();
    detalle.estado = body.estado;
    detalle.visitas = body.visitas;
    detalle.cantidad_episodios = body.cantidad_episodios;
    const tipos = await this.tipoAnimeRepo.findByIds(body.tipo_ids);
    Logger.log(tipos);
    detalle.tipo = tipos;

    const newDetalle = await this.detallesRepo.save(detalle);

    const newAnime = new Animes();
    newAnime.titulo = body.titulo;
    newAnime.url_imagen = body.url_imagen;
    newAnime.sinopsis = body.sinopsis;
    newAnime.fecha_publicacion = body.fecha_publicacion;
    newAnime.detalle_anime = newDetalle;

    return this.animesRepo.save(newAnime);
  }
  async update(id: number, body: CreateAnimeDto) {
    const anime = await this.animesRepo.findOneBy({ id: id });
    if (!anime) {
      throw new NotFoundException(`Anime with id ${id} not found`);
    }
    this.animesRepo.merge(anime, body);
    return this.animesRepo.save(anime);
  }
  async delete(id: number) {
    try {
      const deleteResult = await this.animesRepo.delete({ id: id });
      if (deleteResult.affected === 0) {
        throw new NotFoundException(`Anime with id ${id} not found`);
      }
      return true;
    } catch (error) {
      throw new Error(`Failed to delete anime with id ${id}: ${error.message}`);
    }
  }
}
