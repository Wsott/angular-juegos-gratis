import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonNavBarComponent } from './boton-nav-bar.component';

describe('BotonNavBarComponent', () => {
  let component: BotonNavBarComponent;
  let fixture: ComponentFixture<BotonNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
