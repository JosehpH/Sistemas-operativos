/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail,IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  nombre: string;
  @ApiProperty()
  @IsEmail()
  correo: string;
  @ApiProperty()
  @IsStrongPassword()
  contrasenia: string;
}
