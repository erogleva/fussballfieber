import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { MyScrollServiceService } from '../../shared/services/my-scroll-service.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ILang } from '../../shared/interfaces/translate.interface';
import { Observable } from 'rxjs/index';
import { TranslatesService } from '../../shared/translates/translates.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  public maxImageSize = 240;
  public minImageSize = 60;
  public imageSize = 240;

  public isSmallScreen = false;
  public isHomePage: boolean;
  public isTopOfPage = true;

  public langList$: Observable<ILang[]>;
  public currentLang: ILang;

  @HostListener('window:scroll', ['$event']) getNavbarCss(): void {

    if (this.isSmallScreen) {
      this.imageSize = this.minImageSize;
    } else {
      this.imageSize = this.maxImageSize;
    }

    if (window.pageYOffset > 150) {
      this.isTopOfPage = false;
      this.imageSize = this.minImageSize;
    } else {
      this.isTopOfPage = true;
    }

  }

  constructor(private route: ActivatedRoute,
    private router: Router,
    public sanitizer: DomSanitizer,
    private _translatesService: TranslatesService,
    public breakpointObserver: BreakpointObserver,
    public myScrollService: MyScrollServiceService) {
  }

  ngOnInit() {
    this.isHomePage = this.isHomeUrl(this.router.url);

    this.breakpointObserver.observe(['(max-width: 960px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isSmallScreen = true;
        this.imageSize = this.minImageSize;
      }
    });

    this.langList$ = this._translatesService.getLangList();
    this.currentLang = this._translatesService.getCurrentLang();
  }

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
      } else if (event instanceof NavigationEnd) {
        this.isHomePage = this.isHomeUrl(event.url);
        this.isHomePage ? this.myScrollService.scrollTo({ target: 'top' }) : this.myScrollService.scrollTo({ target: 'content' });
      }
    });
  }

  isHomeUrl(url: string): boolean {
    return url === '/' || url === '/startseite';
  }

  public changeLang(lang: ILang): void {
    this._translatesService.changeLang(lang);
  }
}
