import { Component, QueryList, ViewChildren } from '@angular/core';
import { BotonNavBarComponent } from '../boton-nav-bar/boton-nav-bar.component';

@Component({
  selector: 'platform-navbar',
  imports: [BotonNavBarComponent],
  templateUrl: './barra-plataformas.component.html',
  styleUrl: './barra-plataformas.component.css'
})
export class BarraPlataformasComponent {
  @ViewChildren(BotonNavBarComponent) botones!: QueryList<BotonNavBarComponent>;

  cambiarPlataforma(plataforma: string) {
    this.botones.forEach(boton => {
      if (boton.plataforma != plataforma) {
        console.log(boton);
        boton.seleccionado = false;
      }
      else {
        boton.seleccionado = true;
      }
    });
  }
}
