import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { DetallesAnime } from 'src/persistance/model/detalles-anime.entity';
import { TiposAnime } from 'src/persistance/model/tipos-anime.entity';
@Injectable()
export class DetallesAnimeService {
  constructor(
    @InjectRepository(DetallesAnime)
    private detallesAnimeRepo: Repository<DetallesAnime>,
    @InjectRepository(TiposAnime)
    private tiposAnimeRepo: Repository<TiposAnime>,
  ) {}

  findAll() {
    return this.detallesAnimeRepo.find({ relations: ['tipo'] });
  }
  findOne(id: number) {
    return this.detallesAnimeRepo.findOneBy({ id: id });
  }
  async create(body: any) {
    const newDetalleAnime = await this.detallesAnimeRepo.create(body);
    const tipoIds: number[] = body.tipos_id;
    const tipos = await this.tiposAnimeRepo.findBy({ id: In(tipoIds) });
    newDetalleAnime[0].tipo = tipos;
    return this.detallesAnimeRepo.save(newDetalleAnime);
  }
  async update(id: number, body: any) {
    const detalleAnime = await this.detallesAnimeRepo.findOneBy({ id: id });
    this.detallesAnimeRepo.merge(detalleAnime, body);
  }
  async delete(id: number) {
    await this.detallesAnimeRepo
      .delete({ id: id })
      .then(() => true)
      .catch((error) => error);
  }
}
