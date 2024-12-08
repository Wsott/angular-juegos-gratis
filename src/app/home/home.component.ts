import { Component, inject, Input } from '@angular/core';
import { GameCardComponent } from '../game-card/game-card.component';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-home',
  imports: [ GameCardComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private _titulo: string = "";
  serviceJuegos: JuegoService = inject(JuegoService);

  @Input() set titulo(valor: string) {
    this._titulo = valor;
    this.actualizarLista();
  }

  get titulo(): string {
    return this._titulo;
  }

  async actualizarLista() {
    if (this._titulo != "") {
      let parametro = this._titulo.toLowerCase().replace(" ", "-").replace(".", "");
      
      if (parametro == "epic-games") {
        parametro += "-store";
      }
      //alert (parametro);

      const datos = await this.serviceJuegos.obtenerListaPlataforma(parametro);

      console.log(datos);
    }
  }
}
