import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenciaturasPage } from './licenciaturas.page';

const routes: Routes = [
  {
    path: '',
    component: LicenciaturasPage
  },
  {
    path: ':carreraId',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('../Licenciaturas/licenciatura-details/licenciatura-details.module').then( m => m.LicenciaturaDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenciaturasPageRoutingModule {}
