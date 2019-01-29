import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KontaktComponent } from './kontakt/kontakt.component';
import { RouterModule } from '@angular/router';
import { startseiteRoutes } from './startseite.routing';
import { NgPipesModule } from 'ngx-pipes';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { SozialeNetzwerkeComponent } from './soziale-netzwerke/soziale-netzwerke.component';
import { StartseiteIndexComponent } from './startseite-index/startseite-index.component';
import { StartseiteAusrichterComponent } from './startseite-ausrichter/startseite-ausrichter.component';
import { StartseiteWeitereInfosComponent } from './startseite-weitere-infos/startseite-weitere-infos.component';
import { StartseiteNewsletterComponent } from './startseite-newsletter/startseite-newsletter.component';
import { StartseiteStadionComponent } from './startseite-stadion/startseite-stadion.component';
import { DeferLoadDirective, DeferLoadModule } from '@trademe/ng-defer-load';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    DatenschutzComponent,
    ImpressumComponent,
    KontaktComponent,
    SozialeNetzwerkeComponent,
    StartseiteIndexComponent,
    StartseiteAusrichterComponent,
    StartseiteWeitereInfosComponent,
    StartseiteNewsletterComponent,
    StartseiteStadionComponent,
  ],
  imports: [
    CommonModule,
    DeferLoadModule,
    NgPipesModule,
    RouterModule.forChild(startseiteRoutes),
    SharedComponentsModule
  ],
  providers: [
    DeferLoadDirective
  ]
})
export class StartseiteModule { }
