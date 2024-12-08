import { Injectable } from '@angular/core';
import axios from 'axios';
import { Juego } from './juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  readonly url = "https://gamerpower.p.rapidapi.com/api/filter";

  constructor() { }

  async obtenerListaPlataforma(plataforma: string): Promise<Juego[]> {
    const opciones = {
      method: 'GET',
      url: this.url,
      params: {
        platform: plataforma,
        type: 'game.loot'
      },
      headers: {
        'x-rapidapi-key': 'b07370299dmsh4b98a0bfd7af1a8p17260ajsn7018346b3344',
        'x-rapidapi-host': 'gamerpower.p.rapidapi.com'
      }
    };

    try {
      const datos = await axios.request<Juego[]>(opciones);

      const juegos: Juego[] = datos.data.map((actual: any) => ({
        id: actual.id,
        nombre: actual.title,
        imagen: actual.thumbnail,
        descripcion: actual.description,
        tipo: (actual.type == "Game"? "Juego" : "DLC"),
        fecha_limite: actual.end_date,
        link: actual.open_giveaway
      }));

      //console.log(juegos);

      return juegos;
    } catch(error) {
      console.error(error);
      return [];
    }
  }
}
