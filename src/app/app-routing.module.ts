import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: '', redirectTo: 'licenciaturas', pathMatch: 'full'},
  {
    path: 'licenciaturas',
    children: [
      {
        path: '',
        loadChildren: () => import('./licenciaturas/licenciaturas.module').then( m => m.LicenciaturasPageModule)
      },
    ]
  },
  {
    path: 'formulario-inscripcion-curso',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./formulario-inscripcion-curso/formulario-inscripcion-curso.module').then( m => m.FormularioInscripcionCursoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
