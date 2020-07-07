import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { carrera } from '../carrera.model';
import { CarreraService } from './carrera.service';
@Component({
  selector: 'app-licenciatura-details',
  template: `
  <ion-header>
  <ion-toolbar  color="success">
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/licenciaturas"></ion-back-button>
    </ion-buttons>
    <ion-title class="ion-text-center">{{carrera.nombre}}</ion-title>
    <ion-buttons slot="end">
      <ion-button [routerLink]="['/formulario-inscripcion-curso']">
    <ion-icon name="archive-outline"></ion-icon></ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
<ion-grid class="ion-no-padding">
  <ion-row>
    <ion-col class="ion-no-padding">
      <ion-img [src]="carrera.imagenURL"></ion-img>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <ion-card-content class="ion-text-justify">{{carrera.nombre}}</ion-card-content>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <ion-card-content class="ion-text-justify">{{carrera.descripcion}}</ion-card-content>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <ion-list>
        <ion-item *ngFor="let titulos of carrera.detalles">
          {{titulos}}
        </ion-item>
      </ion-list>
    </ion-col>
  </ion-row>
</ion-grid>
</ion-content>

  `,
  styleUrls: ['./licenciatura-details.page.scss'],
})
export class LicenciaturaDetailsPage implements OnInit {
  carrera: carrera;
  constructor(private activetedrouter: ActivatedRoute, private carreraservice: CarreraService) { }

  ngOnInit() {
    this.activetedrouter.paramMap.subscribe(paramMap => {
    const recipeId = paramMap.get('carreraId');
    this.carrera = this.carreraservice.getCarrera(recipeId);
    console.log(this.carrera);
  });
  }

}
