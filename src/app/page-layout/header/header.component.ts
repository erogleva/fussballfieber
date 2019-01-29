import { Component, Input, OnInit } from '@angular/core';
import { MyScrollServiceService } from '../../shared/services/my-scroll-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isHomePage = false;

  constructor(public myScrollService: MyScrollServiceService) {
  }

  ngOnInit() {
  }

}
