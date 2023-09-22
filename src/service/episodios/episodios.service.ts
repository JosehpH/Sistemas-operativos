import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Episodios } from 'src/persistance/model/episodios.entity';
import { Animes } from 'src/persistance/model/anime.entity';
import { CreateEpisodeDto } from 'src/api/dtos/CreateEpisodeDto.dto';
@Injectable()
export class EpisodiosService {
  constructor(
    @InjectRepository(Episodios)
    private episodiosRepo: Repository<Episodios>,
    @InjectRepository(Animes)
    private animesRepo: Repository<Animes>,
  ) {}

  findAll() {
    return this.episodiosRepo.find({ relations: ['anime', 'comentarios'] });
  }
  findOne(id: number) {
    return this.episodiosRepo.findOneBy({ id: id });
  }
  async create(body: CreateEpisodeDto) {
    const anime = await this.animesRepo.findOneBy({ id: body.anime_id });
    const episodio = new Episodios();
    episodio.num_episodio = body.num_episodio;
    episodio.url_video = body.url_video;
    episodio.anime = anime;
    return this.episodiosRepo.save(episodio);
  }
  async update(id: number, body: CreateEpisodeDto) {
    const episodio = await this.episodiosRepo.findOneBy({ id: id });
    this.episodiosRepo.merge(episodio, body);
  }
  async delete(id: number) {
    await this.episodiosRepo
      .delete({ id: id })
      .then(() => true)
      .catch((error) => error);
  }
}
