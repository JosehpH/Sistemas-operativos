/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
export class CreateAnimeCommentDto {
  @ApiProperty()
  @IsString()
  usuario_id: number;
  @ApiProperty()
  @IsNumber()
  anime_id: number;
  @ApiProperty()
  @IsString()
  descripcion: string;
}
