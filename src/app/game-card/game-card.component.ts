import { Component, Input } from '@angular/core';
import { Juego } from '../juego';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-game-card',
  imports: [ CommonModule, SpinnerComponent ],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {
  @Input() datos?: Juego;
  cargando: boolean = true;

  imagenCargada(): void {
    this.cargando = false;
  }
}
