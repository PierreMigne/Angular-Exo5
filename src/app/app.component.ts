import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  voiture: any;

  constructor() {
    this.voiture = {
      id: 0,
      marque: 'test',
      modele: 'test'
    }
  }

  onUpdateVoiture(voiture) {
    this.voiture = voiture;
  }
}
