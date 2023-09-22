import { Animes } from './../../persistance/model/anime.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { ListasAnime } from 'src/persistance/model/listas-anime.entity';
import { Usuarios } from 'src/persistance/model/usuarios.entity';
import { CreateListaAnimeDto } from 'src/api/dtos/CreateListaAnimeDto.dto';
import { UpdateListaAnimeDto } from 'src/api/dtos/UpdateListaAnimeDto.dto';

@Injectable()
export class ListasAnimeService {
  constructor(
    @InjectRepository(ListasAnime)
    private listasAnimeRepo: Repository<ListasAnime>,
    @InjectRepository(Usuarios)
    private usuariosRepo: Repository<Usuarios>,
    @InjectRepository(Animes)
    private animesRepo: Repository<Animes>,
  ) {}

  findAll() {
    return this.listasAnimeRepo.find({ relations: ['animes', 'usuario'] });
  }
  findOne(id: number) {
    return this.listasAnimeRepo.findOneBy({ id: id });
  }
  async createListaAnimeByUsuario(body: CreateListaAnimeDto) {
    const usuario = await this.usuariosRepo.findOneBy({ id: body.usuario_id });
    const newLista = new ListasAnime();
    newLista.name = body.name;
    newLista.usuario = usuario;
    return this.listasAnimeRepo.save(newLista);
  }
  async updateListaAnime(id: number, body: UpdateListaAnimeDto) {
    const lista = await this.listasAnimeRepo.findOneBy({ id: id });
    if (body.name != '') lista.name = body.name;
    const animesIds = body.episodios_id;
    const animes = await this.animesRepo.findBy({ id: In(animesIds) });
    lista.animes = animes;
    return this.listasAnimeRepo.save(lista);
  }
  async delete(id: number) {
    await this.listasAnimeRepo
      .delete({ id: id })
      .then(() => true)
      .catch((error) => error);
  }
}
