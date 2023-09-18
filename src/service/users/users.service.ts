import { User } from './../../domain/model/user/user';
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  listaUsers: User[] = [
    new User('Josehp', 'Josehp99@gmail.com', 'Josehp123',1),
      new User('Randy', 'Randy89@gmail.com', 'Randy123',2),
      new User('Tomas', 'Tomas79@gmail.com', 'Tomas123',3),
  ];
  getAllUsers(){
      return this.listaUsers.map((user: User) => {
          return {
              Id: user.Id,
              Nombre: user.nombre_usuario,
              Correo: user.correo_electronico,
              Fecha_Registro: user.fecha_registro,
        }
    });
  }
}
