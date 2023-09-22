/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber,IsArray } from 'class-validator';

/* eslint-disable prettier/prettier */
export class UpdateListaAnimeDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty({type:[Number]})
  @IsArray()
  episodios_id: number[];
}
