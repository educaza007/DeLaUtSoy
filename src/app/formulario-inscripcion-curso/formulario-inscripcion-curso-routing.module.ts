import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioInscripcionCursoPage } from './formulario-inscripcion-curso.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioInscripcionCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioInscripcionCursoPageRoutingModule {}
