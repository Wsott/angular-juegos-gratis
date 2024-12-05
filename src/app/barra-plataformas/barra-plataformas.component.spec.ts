import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPlataformasComponent } from './barra-plataformas.component';

describe('BarraPlataformasComponent', () => {
  let component: BarraPlataformasComponent;
  let fixture: ComponentFixture<BarraPlataformasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraPlataformasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraPlataformasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
