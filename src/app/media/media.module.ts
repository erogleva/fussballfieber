import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mediaRoutes } from './media.routing';
import { MediaIndexComponent } from './media-index/media-index.component';
import { MediaBerichteComponent } from './media-berichte/media-berichte.component';

@NgModule({
  declarations: [
    MediaIndexComponent,
    MediaBerichteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mediaRoutes)
  ]
})
export class MediaModule { }
