import { Component, Input } from '@angular/core';
import { Juego } from '../juego';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-card',
  imports: [ CommonModule ],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {
  @Input() datos?: Juego;
}
