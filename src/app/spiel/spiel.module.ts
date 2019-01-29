import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeeComponent } from './idee/idee.component';
import { spielRoutes } from './spiel.routing';
import { RouterModule } from '@angular/router';
import { RegelnComponent } from './regeln/regeln.component';
import { SpielIndexComponent } from './spiel-index/spiel-index.component';
import { VereineComponent } from './vereine/vereine.component';
import { GeschichteComponent } from './geschichte/geschichte.component';
import { SpielerComponent } from './spieler/spieler.component'; import { OwlModule } from 'ngx-owl-carousel';
import { SpielTimeLineComponent } from './spiel-time-line/spiel-time-line.component';

@NgModule({
  declarations: [
    IdeeComponent,
    RegelnComponent,
    SpielIndexComponent,
    VereineComponent,
    GeschichteComponent,
    SpielerComponent,
    SpielTimeLineComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(spielRoutes),
    OwlModule
  ]
})
export class SpielModule { }
