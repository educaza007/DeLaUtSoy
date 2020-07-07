
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicenciaturaDetailsPageRoutingModule } from './licenciatura-details-routing.module';

import { LicenciaturaDetailsPage } from './licenciatura-details.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicenciaturaDetailsPageRoutingModule,
  ],
  declarations: [LicenciaturaDetailsPage]
})
export class LicenciaturaDetailsPageModule {}
