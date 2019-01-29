import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-sponsoren-liste',
  templateUrl: './sponsoren-liste.component.html',
  styleUrls: ['./sponsoren-liste.component.scss']
})
export class SponsorenListeComponent implements OnInit {

  @ViewChild('owlElement') owlElement: OwlCarousel;

  public sliderOptions = {
    autoplay: true,
    dots: true,
    nav: false,
    loop: true,
    navigation: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      960: {
        items: 4
      },
      1200: {
        items: 6
      }
    }
  };

  public sponsors: { title: string, imageUrl: string, url?: string }[] = [
    {
      title: 'Coiffeur-Team Lieb',
      imageUrl: '/assets/images/sponsoren/lieb.png',
      url: 'http://www.coiffeurteam-lieb.de'
    },
    {
      title: 'Radio Schlagerparadies',
      imageUrl: '/assets/images/sponsoren/radioschlagerparadies.png',
      url: 'https://www.schlagerparadies.de'
    },
    {
      title: 'Praxis für Ergotherapie Nadine Stiwitz',
      imageUrl: '/assets/images/sponsoren/ergotherapie-nadine-stiwitz.jpg',
      url: 'http://www.ergo-wallhalben.de/'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
