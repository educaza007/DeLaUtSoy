import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormularioInscripcionCursoPage } from './formulario-inscripcion-curso.page';

describe('FormularioInscripcionCursoPage', () => {
  let component: FormularioInscripcionCursoPage;
  let fixture: ComponentFixture<FormularioInscripcionCursoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioInscripcionCursoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioInscripcionCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
