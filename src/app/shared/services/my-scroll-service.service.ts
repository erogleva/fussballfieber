import { Injectable } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root'
})
export class MyScrollServiceService {

  private config: ScrollToConfigOptions = {
    duration: 650,
    easing: 'easeOutElastic',
    offset: 20
  };

  constructor(private scrollToService: ScrollToService) { }

  scrollTo(config: ScrollToConfigOptions): void {
    console.log(config);
    const options = { ...this.config, ...config };
    this.scrollToService.scrollTo(options);
  }

}
