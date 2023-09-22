/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateEpisodeCommentDto {
  @ApiProperty()
  @IsString()
  usuario_id: number;
  @ApiProperty()
  @IsNumber()
  episodio_id: number;
  @ApiProperty()
  @IsString()
  descripcion: string;
}
