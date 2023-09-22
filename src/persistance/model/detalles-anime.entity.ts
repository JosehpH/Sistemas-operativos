/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { TiposAnime } from './tipos-anime.entity';
import { Animes } from './anime.entity';

@Entity()
export class DetallesAnime {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  estado: string;
  @Column()
  cantidad_episodios: number;
  @Column()
  visitas: number;

    
  @OneToOne(() => Animes, (anime) => anime.detalle_anime)
  anime: Animes;
    
  @ManyToMany(() => TiposAnime, (tipo) => tipo.detalle_anime)
  @JoinTable({
    name: 'detalle-anime_tipo',
    joinColumn: {
      name: 'detalle_id',
    },
    inverseJoinColumn: {
      name: 'tipo-anime_id',
    },
  })
  tipo: TiposAnime[];
}
