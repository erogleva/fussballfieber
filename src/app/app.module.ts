import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/browser/environment';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { CookieModule, CookieService } from 'ngx-cookie';
import { UniversalStorage } from './shared/storage/universal.storage';
import { TranslatesService } from './shared/translates/translates.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AgmCoreModule } from '@agm/core';

export function initLanguage(translateService: TranslatesService): Function {
  return (): Promise<any> => translateService.initLanguage();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: environment.appId }),
    TransferHttpCacheModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: environment.routerTracing, initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    CookieModule.forRoot(),
    DeferLoadModule,
    ScrollToModule.forRoot(),
    SharedModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApjtaFJJyp7UBipZ8Iks8fXRvNvt8uuto'
    })
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    CookieService,
    UniversalStorage,
    { provide: APP_INITIALIZER, useFactory: initLanguage, multi: true, deps: [TranslatesService] },
  ]
})
export class AppModule {
}
