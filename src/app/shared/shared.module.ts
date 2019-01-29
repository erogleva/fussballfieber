import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'ngx-owl-carousel';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedMetaModule } from './shared-meta/shared-meta.module';
import { PageLayoutModule } from '../page-layout/page-layout.module';

@NgModule({
  declarations: [
    /* EventSozialesProjektComponent,
    SpielKartenansichtComponent,
    SpielVorstellungComponent,
    SponsorenAnsprechpartnerComponent,
    SponsorenKontaktFormularComponent,
    SponsorenListeComponent,
    SponsorenPreiseComponent,*/
  ],
  imports: [
    /* AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApjtaFJJyp7UBipZ8Iks8fXRvNvt8uuto'
    }),
    AgmSnazzyInfoWindowModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    OwlModule*/
  ],
  exports: [
    /* EventSozialesProjektComponent,
    SpielKartenansichtComponent,
    SpielVorstellungComponent,
    SponsorenAnsprechpartnerComponent,
    SponsorenKontaktFormularComponent,
    SponsorenListeComponent,
    SponsorenPreiseComponent, */
    // OwlModule,
    SharedMetaModule,
    // TransferHttpModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
