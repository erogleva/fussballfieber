import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CookieBackendService, CookieService } from 'ngx-cookie';
import { TranslatesServerModule } from './shared/translates/translates-server/translates-server.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    NoopAnimationsModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
    TranslatesServerModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    // { provide: CookieService, useClass: CookieBackendService },
  ],
})
export class AppServerModule {
}
