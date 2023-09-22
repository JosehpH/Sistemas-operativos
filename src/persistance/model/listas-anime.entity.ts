/* eslint-disable prettier/prettier */
import { Animes } from './anime.entity';
import { Usuarios } from './usuarios.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinColumn,
} from 'typeorm';
@Entity()
export class ListasAnime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Usuarios, (user) => user.listas_Anime)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuarios;

  @ManyToMany(() => Animes, (anime) => anime.lista_anime)
  animes: Animes[];
}
