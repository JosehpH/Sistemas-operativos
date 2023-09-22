/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { ListasAnime } from './listas-anime.entity';
import { Comentarios } from './comentarios.entity';
@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  correo: string;
  @Column()
  contrasenia: string;
  @OneToMany(() => ListasAnime, (lista) => lista.usuario)
  listas_Anime: ListasAnime[];
    @OneToMany(() => Comentarios, (comentario) => comentario.usuario)
    comentarios: Comentarios[];
}
