import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-zeitplan',
  templateUrl: './event-zeitplan.component.html',
  styleUrls: ['./event-zeitplan.component.scss']
})
export class EventZeitplanComponent implements OnInit {

  public events = [
    {
      dateTime: '',
      dayNumber: '29',
      month: 'Mai',
      title: 'Start des Weltrekordversuchs',
      subEvents: [
        {
          time: '18:00',
          title: 'Eröffnungsparty',
        },
        {
          time: '19:00',
          title: 'Anstoß zum Weltrekordspiel'
        },
        {
          time: '21:00',
          title: 'Livemusik mit der Firma Holunder'
        },
        {
          time: '02:00',
          title: 'Tombola'
        }
      ]
    },
    {
      dateTime: '',
      dayNumber: '30',
      month: 'Mai',
      title: 'Vatertagstreff',
      subEvents: [
        {
          time: '11:00',
          title: 'Frühschoppen',
        },
        {
          time: '11:30',
          title: 'Pasta-Party',
          description: 'Mit Nudeln, Pizza und Flammkuchen'
        },
        {
          time: '14:30',
          title: 'Kaffee und Kuchen'
        },
        {
          time: '21:00',
          title: 'Tombola'
        }
      ]
    },
    {
      dateTime: '',
      dayNumber: '31',
      month: 'Mai',
      subEvents: [
        {
          time: '21:00',
          title: 'Livemusik mit Country Crash',
        },
        {
          time: '02:00',
          title: 'Tombola'
        }
      ]
    },
    {
      dateTime: '',
      dayNumber: '01',
      month: 'Juni',
      subEvents: [
        {
          time: '10:00',
          title: 'Fifa Quali-Turnier zur Saarland-Meisterschaft'
        },
        /* {
          time: '15:00',
          title: 'Fußballquiz'
        }, */
        {
          time: '20:00',
          title: 'CL-Finale auf der Leindwand'
        }
      ]
    },
    {
      dateTime: '',
      dayNumber: '02',
      month: 'Juni',
      subEvents: [
        {
          time: '12:00',
          title: 'Mittagessen',
        },
        {
          time: '13:00',
          title: 'Glücksrad vom Jugendförderverein'
        },
        {
          time: '14:00',
          title: 'Typisierungsaktion / Blutspende',
        },
        {
          time: '14:30',
          title: 'Kaffee und Kuchen'
        }
      ]
    },
    {
      dateTime: '',
      dayNumber: '03',
      month: 'Juni',
      subEvents: [
        {
          time: '07:03',
          title: 'Die “Weltrekordknacker und es geht weiter” - Party',
          description: `alle Getränke 1,50 €<br />
              Rührei mit Speck 3 € (bis 10.30 Uhr`
        }
      ]
    },
    {
      dateTime: '',
      dayNumber: '04',
      month: 'Juni',
      subEvents: [
        {
          time: '19:00',
          title: 'Oktoberfest im Juni',
          description: `mit Maßbier, Brezeln und viel Gaudi`
        }
      ]
    },
    {
      dateTime: '',
      dayNumber: '05',
      month: 'Juni',
      subEvents: [
        {
          time: '19:00',
          title: 'Weltrekordparty'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
