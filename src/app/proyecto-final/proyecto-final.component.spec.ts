import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoFinalComponent } from './proyecto-final.component';
import { GoogleMapsModule } from '@angular/google-maps';
describe('ProyectoFinalComponent', () => {
  let component: ProyectoFinalComponent;
  let fixture: ComponentFixture<ProyectoFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoFinalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProyectoFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
