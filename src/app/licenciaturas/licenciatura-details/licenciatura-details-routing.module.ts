import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenciaturaDetailsPage } from './licenciatura-details.page';

const routes: Routes = [
  {
    path: '',
    component: LicenciaturaDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenciaturaDetailsPageRoutingModule {}
