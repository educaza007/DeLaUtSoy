import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicenciaturasPageRoutingModule } from './licenciaturas-routing.module';

import { LicenciaturasPage } from './licenciaturas.page';
import { CarrerasService } from './carreras.service';
import { carrera } from './carrera.model';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicenciaturasPageRoutingModule,
  ],
  declarations: [LicenciaturasPage],
  exports: [
    CarrerasService, carrera
  ]
})
export class LicenciaturasPageModule {}
