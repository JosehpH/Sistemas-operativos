/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsUrl } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateEpisodeDto {
  @ApiProperty()
  @IsNumber()
  num_episodio: number;
  @ApiProperty()
  @IsUrl()
  url_video: string;
  @ApiProperty()
  @IsNumber()
  anime_id: number;
}
