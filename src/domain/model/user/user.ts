export class User {
  Id: number;
  nombre_usuario: string;
  correo_electronico: string;
  contrasenia: string;
  fecha_registro: Date;

  constructor(
    nombre_usuario: string,
    correo_electronico: string,
    contrasenia: string,
    Id: number,
  ) {
    this.nombre_usuario = nombre_usuario;
    this.correo_electronico = correo_electronico;
    this.contrasenia = contrasenia;
    this.fecha_registro = new Date();
    this.Id = Id;
  }
}
