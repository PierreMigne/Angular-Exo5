import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-tab-item]',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css']
})
export class TabItemComponent implements OnInit {

  @Input() id: number = 0;
  @Input() marque: string = '';
  @Input() modele: string = '';

  @Output() detailVoiture = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDetails() {
    this.detailVoiture.emit(+this.id)
  }

}
