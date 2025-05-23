import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEstudiantesComponent } from './listado-estudiantes.component';

describe('ListadoEstudiantesComponent', () => {
  let component: ListadoEstudiantesComponent;
  let fixture: ComponentFixture<ListadoEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoEstudiantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
