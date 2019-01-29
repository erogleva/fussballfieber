import { Component, OnInit } from '@angular/core';

export interface ITeamMember {
  firstName: string;
  lastName: string;
  age: number;
  job: string;
  club: string;
  positionInClub: string;
  positionInOrg: string;
  imageUrl: string;
  showBackside: boolean;
  facebook: string;
  twitter: string;
  email: string;
}

@Component({
  selector: 'app-startseite-ausrichter',
  templateUrl: './startseite-ausrichter.component.html',
  styleUrls: ['./startseite-ausrichter.component.scss']
})
export class StartseiteAusrichterComponent implements OnInit {

  public teamMembers: ITeamMember[] = [
    {
      firstName: 'Thomas',
      lastName: 'Handle',
      age: 35,
      club: 'SF Winterbach',
      job: 'Fachinformatiker beim IT-Dienstleistungszentrum des Saarlandes',
      positionInClub: 'Pressewart',
      positionInOrg: 'Pressearbeit & Sponsoring',
      imageUrl: '/assets/images/ansprechpartner/Thomas-min.jpg',
      showBackside: false,
      facebook: 'https://www.facebook.com/thomas.handle',
      twitter: '',
      email: 't.handle@fussballfieber2019.de'
    },
    {
      firstName: 'Torsten',
      lastName: 'Schäfer',
      age: 45,
      club: 'SG Hassel',
      job: 'IT-Netzwerktechniker beim IT-Dienstleistungszentrum des Saarlandes',
      positionInClub: 'Betreuer',
      positionInOrg: 'Externer Berater',
      imageUrl: '/assets/images/ansprechpartner/Torsten-min.jpg',
      showBackside: false,
      facebook: 'https://www.facebook.com/torsten.schafer.73',
      twitter: '',
      email: 't.schaefer@fussballfieber2019.de'
    },
    {
      firstName: 'Dirk',
      lastName: 'Stiwitz',
      age: 47,
      club: 'Thank God it´s Friday Event Club',
      job: 'Diplom-Verwaltungswirt beim IT-Dienstleistungszentrum des Saarlandes',
      positionInClub: 'Vorsitzender',
      positionInOrg: 'Organisation Spiel/Beweisführung & Sponsoring',
      imageUrl: '/assets/images/ansprechpartner/Dirk-min.jpg',
      showBackside: false,
      facebook: 'https://www.facebook.com/dirk.stiwitz',
      twitter: '',
      email: 'd.stiwitz@fussballfieber2019.de'
    },
    {
      firstName: 'Ronny',
      lastName: 'Hassel',
      age: 36,
      club: 'SF Winterbach',
      job: 'Sachbearbeiter der Leistungsgewährung im SGB II',
      positionInClub: '2. Vorsitzender',
      positionInOrg: 'Koordination',
      imageUrl: '/assets/images/ansprechpartner/Ronny-min.jpg',
      showBackside: false,
      facebook: 'https://www.facebook.com/ronny.hassel',
      twitter: '',
      email: 'r.hassel@fussballfieber2019.de'
    },
    {
      firstName: 'Robin',
      lastName: 'Klein',
      age: 23,
      club: 'SF Winterbach',
      job: 'Auszubildender Kaufmann im Groß- und Außenhandel',
      positionInClub: 'PR und Marketing',
      positionInOrg: 'PR und Marketing',
      imageUrl: '/assets/images/ansprechpartner/Robin-min.jpg',
      showBackside: false,
      facebook: 'https://www.facebook.com/robin.klein.374',
      twitter: '',
      email: 'r.klein@fussballfieber2019.de'
    },
    {
      firstName: 'Maike',
      lastName: 'Marhöfer',
      age: 32,
      club: 'Thank God it´s Friday Event Club',
      job: 'Erzieherin',
      positionInClub: 'Schriftführerin',
      positionInOrg: 'Organisation Spielerbetreuung',
      imageUrl: '/assets/images/ansprechpartner/Maike-min.jpg',
      showBackside: false,
      facebook: '',
      twitter: '',
      email: 'm.marhoefer@fussballfieber2019.de'
    },
    {
      firstName: 'Thore',
      lastName: 'Marhöfer',
      age: 28,
      club: 'Thank God it´s Friday Event Club',
      job: 'Technischer Offizier bei der Bundeswehr',
      positionInClub: 'Beisitzer',
      positionInOrg: 'Organisation Spiel und Beweisführung',
      imageUrl: '/assets/images/ansprechpartner/Thore-min.jpg',
      showBackside: false,
      facebook: '',
      twitter: '',
      email: 't.marhoefer@fussballfieber2019.de'
    },
    {
      firstName: 'Timo',
      lastName: 'Harth',
      age: 29,
      club: 'Thank God it´s Friday Event Club',
      job: 'Soldat',
      positionInClub: 'Beisitzer',
      positionInOrg: 'Organisation Spiel und Beweisführung',
      imageUrl: '/assets/images/ansprechpartner/Timo-min.jpg',
      showBackside: false,
      facebook: '',
      twitter: '',
      email: 't.harth@fussballfieber2019.de'
    },
    {
      firstName: 'Lukas',
      lastName: 'Krämer',
      age: 23,
      club: 'SF Winterbach',
      job: 'Fachmitarbeiter Wirtschaftsprüfung',
      positionInClub: 'Spieler',
      positionInOrg: 'Organisation Catering und Spielerbetreuung',
      imageUrl: '',
      showBackside: false,
      facebook: 'https://www.facebook.com/lukas.kramer.399',
      twitter: '',
      email: 'l.kraemer@fussballfieber2019.de'
    },
    {
      firstName: 'Lukas',
      lastName: 'Saar',
      age: 25,
      club: 'SF Winterbach',
      job: 'Student Geoinformatik und Vermessungswesen',
      positionInClub: 'Schriftführer',
      positionInOrg: 'Organisation Catering und Spielerbetreuung',
      imageUrl: '/assets/images/ansprechpartner/Lukas-Saar-min.jpg',
      showBackside: false,
      facebook: 'https://www.facebook.com/lukassaar93',
      twitter: '',
      email: 'l.saar@fussballfieber2019.de'
    },
    {
      firstName: 'Nathalie',
      lastName: 'Feller',
      age: 30,
      club: 'SF Winterbach',
      job: 'Versicherungskauffrau',
      positionInClub: 'Spartenleiterin Damenfußball',
      positionInOrg: 'Organisation Catering und Spielerbetreuung',
      imageUrl: '/assets/images/ansprechpartner/Nathalie-min.jpg',
      showBackside: false,
      facebook: 'https://www.facebook.com/nathy.fe.3',
      twitter: '',
      email: 'n.feller@fussballfieber2019.de'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  changeStatus(teamMember: ITeamMember) {
    teamMember.showBackside = !teamMember.showBackside;
  }

}
