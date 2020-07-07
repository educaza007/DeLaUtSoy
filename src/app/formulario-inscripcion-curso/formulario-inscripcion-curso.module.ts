import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioInscripcionCursoPageRoutingModule } from './formulario-inscripcion-curso-routing.module';

import { FormularioInscripcionCursoPage } from './formulario-inscripcion-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioInscripcionCursoPageRoutingModule
  ],
  declarations: [FormularioInscripcionCursoPage]
})
export class FormularioInscripcionCursoPageModule {}
