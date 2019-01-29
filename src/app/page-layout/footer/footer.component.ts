import { Component, OnInit } from '@angular/core';
import { MyScrollServiceService } from '../../shared/services/my-scroll-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public myScrollService: MyScrollServiceService) { }

  ngOnInit() {
  }

}
