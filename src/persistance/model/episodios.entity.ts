/* eslint-disable prettier/prettier */
import { Comentarios } from './comentarios.entity';
import { Animes } from './anime.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
@Entity()
export class Episodios {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  num_episodio: number;
  @Column()
  url_video: string;
  @ManyToOne(() => Animes, (anime) => anime.lista_episodidos)
  @JoinColumn({ name: 'anime_id' })
  anime: Animes;
  @OneToMany(() => Comentarios, (comentario) => comentario.episodio)
  comentarios: Comentarios[];
}
