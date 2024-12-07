import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'navbar-boton',
  imports: [CommonModule],
  templateUrl: './boton-nav-bar.component.html',
  styleUrl: './boton-nav-bar.component.css'
})
export class BotonNavBarComponent {
  @Input() plataforma: string = "Inicio";
  @Input() seleccionado: boolean = false;
  @Output() actualizar = new EventEmitter<string>();

  notificar() {
    this.actualizar.emit(this.plataforma);
  }
}
