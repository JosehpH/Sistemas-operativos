/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, IsNumber,IsISO8601,IsArray } from 'class-validator';

export class CreateAnimeDto {
  @ApiProperty()
  @IsString()
  titulo: string;

  @ApiProperty()
  @IsUrl()
  url_imagen: string;

  @ApiProperty()
  @IsString()
  sinopsis: string;

  @ApiProperty({ type: [Number] })
  @IsArray()
  @IsNumber({}, { each: true })
  tipo_ids: number[];

  @ApiProperty()
  @IsISO8601()
  fecha_publicacion: Date;

  @ApiProperty()
  @IsString()
  estado: string;

  @ApiProperty()
  @IsNumber()
  visitas: number;

  @ApiProperty()
  @IsNumber()
  cantidad_episodios: number;
}
