import { Component, inject, Input } from '@angular/core';
import { GameCardComponent } from '../game-card/game-card.component';
import { JuegoService } from '../juego.service';
import { Juego } from '../juego';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-home',
  imports: [ GameCardComponent, CommonModule, SpinnerComponent, LandingComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private _titulo: string = "";
  mobile: boolean = false;
  serviceJuegos: JuegoService = inject(JuegoService);
  listaDeJuegos: Juego[][] = [];
  listaOriginal: Juego[] = [];
  cargando: boolean = false;
  landing: boolean = true;

  @Input() set titulo(valor: string) {
    if (valor != ""){
      //alert(valor);
      this._titulo = valor;
      this.actualizarLista();
    }
  }

  get titulo(): string {
    return this._titulo;
  }

  ngOnInit(): void {
    this.verificarPantalla();
  }

  verificarPantalla() {
    if (window.innerWidth < 800) {
      this.mobile = true;
    }
  }

  async actualizarLista() {
    this.landing = false;
    //alert(this.landing)
    if (this._titulo != "") {
      this.cargando = true;
      this.listaDeJuegos = [];
      this.listaOriginal = [];

      let parametro = this._titulo.toLowerCase().replace(" ", "-").replace(".", "");
      
      if (parametro == "epic-games") {
        parametro += "-store";
      }
      //alert (parametro);

      const datos = await this.serviceJuegos.obtenerListaPlataforma(parametro);
      this.cargando = false;

      this.listaOriginal = datos;

      const sublistas = [];

      if (this.mobile) {
        for (let x = 0; x < datos.length; x += 1) {
          sublistas.push(datos.slice(x, x + 1));
        }

        this.listaDeJuegos = sublistas;
        return
      }

      for (let x = 0; x < datos.length; x += 4) {
        sublistas.push(datos.slice(x, x + 4));
      }

      this.listaDeJuegos = sublistas;
      console.log(this.listaDeJuegos);
    }
  }
}
