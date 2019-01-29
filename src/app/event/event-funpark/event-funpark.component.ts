import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-funpark',
  templateUrl: './event-funpark.component.html',
  styleUrls: ['./event-funpark.component.scss']
})
export class EventFunparkComponent implements OnInit {

  public events: {
    title: string;
    imageUrl: string;
    description: string;
  }[] = [
      {
        title: 'Fußball-Dart',
        description: `An unserer aufblasbaren Dartwand können Spieler oder Teams gegeneinander antreten.
                  Dabei können das klassische 501 bis 0, &bdquo;die höchste Punktzahl&rdquo; oder
                  auch Varianten wie &bdquo;Round the Clock&rdquo; oder &bdquo;Cricket&rdquo; gegeneinander gespielt werden.`,
        imageUrl: ''
      },
      {
        title: 'Hüpfburg',
        description: `Eine Hüpfburg bietet auch den Kleinsten Spaß und sie können sich so austoben.`,
        imageUrl: ''
      },
      {
        title: 'Geschwindigkeitsschießen',
        description: ``,
        imageUrl: ''
      },
      {
        title: 'Torwandschießen',
        description: ``,
        imageUrl: ''
      },
      {
        title: 'Hindernisparcours',
        description: ``,
        imageUrl: ''
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
