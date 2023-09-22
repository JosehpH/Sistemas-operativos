/* eslint-disable prettier/prettier */
import { Usuarios } from 'src/persistance/model/usuarios.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Animes } from './anime.entity';
import { Episodios } from './episodios.entity';
@Entity()
export class Comentarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;
  
  @Column()
  fecha_publicacion: Date;

  @ManyToOne(() => Animes, (anime) => anime.comentarios)
  @JoinColumn({ name: 'anime_id' })
  anime: Animes;

  @ManyToOne(() => Episodios, (episodio) => episodio.comentarios)
  @JoinColumn({ name: 'episodio_id' })
  episodio: Episodios;

  @ManyToOne(() => Usuarios, (usuario) => usuario.comentarios)
  @JoinColumn({ name: 'user_id' })
  usuario: Usuarios;
}
