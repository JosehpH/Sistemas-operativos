export class SeriesAnime {
  Id: number;
  titulo: string;
  genero: string;
  episodios: number;
  estudio_produccion: string;
  sinopsis: string;
  fecha_estreno: Date;
  estado: string;

  constructor(
    Id: number,
    titulo: string,
    genero: string,
    episodios: number,
    estudio_produccion: string,
    sinopsis: string,
  ) {
    this.Id = Id;
    this.titulo = titulo;
    this.genero = genero;
    this.episodios = episodios;
    this.estudio_produccion = estudio_produccion;
    this.sinopsis = sinopsis;
    this.fecha_estreno = new Date();
  }
}
