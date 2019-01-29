import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-location',
  templateUrl: './event-location.component.html',
  styleUrls: ['./event-location.component.scss']
})
export class EventLocationComponent implements OnInit {

  public lat = 49.480334;
  public lng = 7.096119;

  constructor() { }

  ngOnInit() {
  }

}
