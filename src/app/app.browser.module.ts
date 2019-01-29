import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { TranslatesBrowserModule } from './shared/translates/translates-browser/translates-browser.module';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ServiceWorkerModule } from '@angular/service-worker';

export function getRequest(): any {
  return { headers: { cookie: document.cookie } };
}

@NgModule({
  bootstrap: [
    AppComponent
  ], // , InlineStyleComponent
  imports: [
    AppModule,
    BrowserTransferStateModule,
    TranslatesBrowserModule,
    // InlineStyleModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: false }),
  ],
  providers: [
    {
      provide: REQUEST,
      useFactory: getRequest,
    },
    { provide: 'ORIGIN_URL', useValue: location.origin },
  ],
})
export class AppBrowserModule { }
