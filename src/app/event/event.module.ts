import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { eventRoutes } from './event.routing';
import { EventIndexComponent } from './event-index/event-index.component';
import { EventBandsComponent } from './event-bands/event-bands.component';
import { EventFirmenComponent } from './event-firmen/event-firmen.component';
import { EventZeitplanComponent } from './event-zeitplan/event-zeitplan.component';
import { EventFunparkComponent } from './event-funpark/event-funpark.component';
import { EventPreiseComponent } from './event-preise/event-preise.component';
import { EventTombolasComponent } from './event-tombolas/event-tombolas.component';
import { EventLocationComponent } from './event-location/event-location.component';
import { AgmCoreModule } from '@agm/core';
import { NgPipesModule } from "ngx-pipes";

@NgModule({
  declarations: [
    EventIndexComponent,
    EventBandsComponent,
    EventFirmenComponent,
    EventZeitplanComponent,
    EventFunparkComponent,
    EventPreiseComponent,
    EventTombolasComponent,
    EventLocationComponent,
  ],
  imports: [
    AgmCoreModule,
    CommonModule,
    NgPipesModule,
    RouterModule.forChild(eventRoutes)
  ]
})
export class EventModule { }
