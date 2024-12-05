import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraPlataformasComponent } from './barra-plataformas/barra-plataformas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarraPlataformasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-juegos-gratis';
}
