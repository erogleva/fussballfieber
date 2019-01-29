import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnsprechpartnerIndexComponent } from './ansprechpartner-index/ansprechpartner-index.component';
import { RouterModule } from '@angular/router';
import { ansprechpartnerRoutes } from './ansprechpartner.routing';
import { SharedComponentsModule } from '../shared/components/shared-components.module';

@NgModule({
  declarations: [AnsprechpartnerIndexComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ansprechpartnerRoutes),
    SharedComponentsModule
  ]
})
export class AnsprechpartnerModule { }
