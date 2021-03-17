import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Output() newVoitureEmitter = new EventEmitter;

  voitures: Array<any> = [
    {
      id: 0,
      marque: 'Peugeot',
      modele: '208'
    },
    {
      id: 1,
      marque: 'Renault',
      modele: 'Clio'
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.newVoitureEmitter.emit(this.voitures[0])
  }

  onDetailVoiture(id:number) {
    //alert(id)
    this.newVoitureEmitter.emit(this.voitures[id])
  }

}
