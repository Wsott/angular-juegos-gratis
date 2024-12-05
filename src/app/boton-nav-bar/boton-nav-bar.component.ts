import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar-boton',
  imports: [CommonModule],
  templateUrl: './boton-nav-bar.component.html',
  styleUrl: './boton-nav-bar.component.css'
})
export class BotonNavBarComponent {
  @Input() plataforma: string = "Inicio";
}
