/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateListaAnimeDto {
  @ApiProperty()
  @IsNumber()
  usuario_id: number;
  @ApiProperty()
  @IsString()
  name: string;
}
