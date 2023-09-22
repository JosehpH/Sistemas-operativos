/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column,ManyToMany } from 'typeorm';
import { DetallesAnime } from './detalles-anime.entity';
@Entity()
export class TiposAnime {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @ManyToMany(()=>DetallesAnime,(detalle)=>detalle.tipo)
  detalle_anime: DetallesAnime[];
}
