import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraPlataformasComponent } from './barra-plataformas/barra-plataformas.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [BarraPlataformasComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-juegos-gratis';
  cabecera: string = "";

  actualizarListado(plataforma: string) {
    this.cabecera = plataforma;
    //alert("Deberia actualizar la lista de juegos de " + plataforma);
  }
}
