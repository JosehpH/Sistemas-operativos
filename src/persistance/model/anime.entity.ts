/* eslint-disable prettier/prettier */
import { JoinColumn } from 'typeorm';
import { Comentarios } from './comentarios.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { DetallesAnime } from './detalles-anime.entity';
import { ListasAnime } from './listas-anime.entity';
import { Episodios } from './episodios.entity';

@Entity()
export class Animes {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  titulo: string;
  @Column()
  sinopsis: string;
  @Column()
  fecha_publicacion: Date;

  @Column()
  url_imagen: string;

  @OneToOne(() => DetallesAnime, (detalle) => detalle.anime)
  @JoinColumn()
  detalle_anime: DetallesAnime;

  @ManyToMany(() => ListasAnime, (lista) => lista.animes)
  @JoinTable({
    name: 'animes_listas',
    joinColumn: {
      name: 'anime_id',
    },
    inverseJoinColumn: {
      name: 'lista_id',
    },
  })
  lista_anime: ListasAnime[];

  @OneToMany(() => Comentarios, (comentario) => comentario.anime)
  comentarios: Comentarios[];

  @OneToMany(() => Episodios, (episodio) => episodio.anime)
  lista_episodidos: Episodios[];
}
