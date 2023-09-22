import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comentarios } from 'src/persistance/model/comentarios.entity';
import { Usuarios } from 'src/persistance/model/usuarios.entity';
import { Episodios } from 'src/persistance/model/episodios.entity';
import { Animes } from 'src/persistance/model/anime.entity';
import { CreateAnimeCommentDto } from 'src/api/dtos/CreateAnimeCommentDto.dto';
import { CreateEpisodeCommentDto } from 'src/api/dtos/CreateEpisodeCommentDto.dto';
@Injectable()
export class ComentariosService {
  constructor(
    @InjectRepository(Comentarios)
    private comentariosRepo: Repository<Comentarios>,
    @InjectRepository(Usuarios)
    private usuariosRepo: Repository<Usuarios>,
    @InjectRepository(Episodios)
    private episodiosRepo: Repository<Episodios>,
    @InjectRepository(Animes)
    private animesRepo: Repository<Animes>,
  ) {}

  findAll() {
    return this.comentariosRepo.find({
      relations: ['anime', 'episodio'],
    });
  }
  findOne(id: number) {
    return this.comentariosRepo.findOneBy({ id: id });
  }
  async createComentarioForAnime(body: CreateAnimeCommentDto) {
    const usuario = await this.usuariosRepo.findOneBy({ id: body.usuario_id });
    const anime = await this.animesRepo.findOneBy({ id: body.anime_id });
    const new_comentario = new Comentarios();
    new_comentario.descripcion = body.descripcion;
    new_comentario.usuario = usuario;
    new_comentario.anime = anime;
    new_comentario.fecha_publicacion = new Date();
    return this.comentariosRepo.save(new_comentario);
  }
  async createComentarioForEpisodio(body: CreateEpisodeCommentDto) {
    const usuario = await this.usuariosRepo.findOneBy({ id: body.usuario_id });
    const episodio = await this.episodiosRepo.findOneBy({
      id: body.episodio_id,
    });
    const new_comentario = new Comentarios();
    new_comentario.descripcion = body.descripcion;
    new_comentario.usuario = usuario;
    new_comentario.episodio = episodio;
    new_comentario.fecha_publicacion = new Date();
    return this.comentariosRepo.save(new_comentario);
  }
  async update(id: number, body: any) {
    const comentario = await this.comentariosRepo.findOneBy({ id: id });
    this.comentariosRepo.merge(comentario, body);
  }
  async delete(id: number) {
    await this.comentariosRepo
      .delete({ id: id })
      .then(() => true)
      .catch((error) => error);
  }
}
