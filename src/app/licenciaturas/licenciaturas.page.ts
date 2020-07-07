import { Component, OnInit } from '@angular/core';
import {CarrerasService} from './carreras.service';
@Component({
  selector: 'app-licenciaturas',
  template: `<ion-header [translucent]="true">
  <ion-toolbar color="success">
    <ion-title class="ion-text-center">
      De La Ut Soy
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">De La Ut Soy</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-card>
  <ion-avatar>
      <ion-img [src]=""></ion-img>
    </ion-avatar>
  <ion-card-header>
    <ion-card-title>Universidad Tecnologica de Tula Tepeji</ion-card-title>
    <ion-card-subtitle  class="ion-text-justify">Conocenos...</ion-card-subtitle>
  </ion-card-header>
  <ion-card-content class="ion-text-justify">
  La Universidad Tecnológica de Tula-Tepeji, es una es una institución pública
  de educación superior ubicada en la ciudad de Tula de Allende, en el Estado de Hidalgo, México.
  </ion-card-content >
  <ion-card-content class="ion-text-justify">
    La Uttt cuenta con
    <ion-badge> {{ carrerasUt.length }}</ion-badge>
    carreras, si vas a entrar a la univercidad y aun no sabes que estudiar,
    la Univercidad Tecologica de Tula Tepeji te invita a conocer a fondo cada carrera
    te invitamos a que te incribas al las UtExperience.
    </ion-card-content>
</ion-card>
<ion-list>
    <ion-item *ngFor="let carrera of carrerasUt"  [routerLink]="['/licenciaturas',carrera.id]">
    <ion-avatar slol="slerl">
      <ion-img [src]="carrera.imagenURL"></ion-img>
    </ion-avatar>
    <ion-label>{{carrera.nombre}}</ion-label>
    </ion-item>
  </ion-list>
</ion-content>

`,
  styles: [`#container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  #container strong {
    font-size: 20px;
    line-height: 26px;
  }

  #container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
  }

  #container a {
    text-decoration: none;
  }`],
})
export class LicenciaturasPage implements OnInit {
  carrerasUt = [];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private CarrerasService: CarrerasService) { }

  ngOnInit() {
    this.carrerasUt = this.CarrerasService.getCarreras();
  }

}
