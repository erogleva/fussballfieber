import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startseite-stadion',
  templateUrl: './startseite-stadion.component.html',
  styleUrls: ['./startseite-stadion.component.scss']
})
export class StartseiteStadionComponent implements OnInit {

  public imageList = [
    {
      url: '/assets/images/anlage/97.jpg',
      show: false
    },
    {
      url: '/assets/images/anlage/98.jpg',
      show: false
    },
    {
      url: '/assets/images/anlage/99.jpg',
      show: false
    },
    {
      url: '/assets/images/anlage/100.jpg',
      show: false
    },
    {
      url: '/assets/images/anlage/651.jpg',
      show: false
    },
  ];

  public currentImage = this.imageList[0];

  constructor() {
  }

  ngOnInit() {
  }

  showImage(image: { url: string; show: boolean }) {
    this.currentImage = image;
  }

}
