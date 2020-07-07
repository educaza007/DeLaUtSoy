import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>
      De La Ut Soy
      <ion-button color="success">Iniciar Sesion</ion-button>
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
    <ion-card-title>Univercidad Tecnologica de Tula Tepeji</ion-card-title>
    <ion-card-subtitle>Subtitulo</ion-card-subtitle>
  </ion-card-header>
  <ion-card-content>
  La Universidad Tecnológica de Tula-Tepeji, es una es una institución pública
  de educación superior ubicada en la ciudad de Tula de Allende, en el Estado de Hidalgo, México.
  </ion-card-content>
  <ion-label>
    La Uttt cuenta con
    <ion-badge></ion-badge>
    carreras
    </ion-label>
</ion-card>

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
export class HomePage {
 
  constructor() {}

}
