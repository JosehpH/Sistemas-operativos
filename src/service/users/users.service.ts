import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from 'src/persistance/model/usuarios.entity';
import { CreateUserDto } from 'src/api/dtos/CreateUserDto.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Usuarios)
    private usuariosRepo: Repository<Usuarios>,
  ) {}

  findAll() {
    return this.usuariosRepo.find();
  }
  findOne(id: number) {
    return this.usuariosRepo.findOneBy({ id: id });
  }
  create(body: CreateUserDto) {
    const nesUsuario = this.usuariosRepo.create(body);
    return this.usuariosRepo.save(nesUsuario);
  }
  async update(id: number, body: CreateUserDto) {
    const usuario = await this.usuariosRepo.findOneBy({ id: id });
    this.usuariosRepo.merge(usuario, body);
  }
  async delete(id: number) {
    await this.usuariosRepo
      .delete({ id: id })
      .then(() => true)
      .catch((error) => error);
  }
}
