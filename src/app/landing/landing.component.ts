import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  mobile: boolean = false;

  ngOnInit(): void {
    this.verificarPantalla();
  }

  verificarPantalla() {
    if (window.innerWidth < 800) {
      this.mobile = true;
    }
  }
}
