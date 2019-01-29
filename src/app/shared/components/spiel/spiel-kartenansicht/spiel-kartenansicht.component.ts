import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spiel-kartenansicht',
  templateUrl: './spiel-kartenansicht.component.html',
  styleUrls: ['./spiel-kartenansicht.component.scss']
})
export class SpielKartenansichtComponent implements OnInit {

  public lat = 49.480334;
  public lng = 7.096119;

  constructor() { }

  ngOnInit() {
  }

}
