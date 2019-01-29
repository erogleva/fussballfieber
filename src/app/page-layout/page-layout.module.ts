import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { pageLayoutRoutes } from './page-layout.routing';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { LoadingIndicatorModule } from '../shared/components/loading-indicator/loading-indicator.module';
import { LayoutModule } from '@angular/cdk/layout';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CountDownTimerComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    MenuComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    LoadingIndicatorModule,
    RouterModule.forChild(pageLayoutRoutes),
    ScrollToModule,
    TranslateModule
  ],
  providers: []
})
export class PageLayoutModule {
}
