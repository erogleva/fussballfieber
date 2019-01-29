import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sponsorenRoutes } from './sponsoren.routing';
import { OwlModule } from 'ngx-owl-carousel';
import { SponsorenIndexComponent } from './sponsoren-index/sponsoren-index.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';

@NgModule({
  declarations: [
    SponsorenIndexComponent
  ],
  imports: [
    CommonModule,
    OwlModule,
    RouterModule.forChild(sponsorenRoutes),
    SharedComponentsModule
  ]
})
export class SponsorenModule { }
