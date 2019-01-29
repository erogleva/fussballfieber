import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTag('og:title', '123456');
  }

  ngOnInit() {
  }

}
