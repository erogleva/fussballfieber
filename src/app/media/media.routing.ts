import { Routes } from '@angular/router';
import { MediaIndexComponent } from './media-index/media-index.component';

export const mediaRoutes: Routes = [
  {
    path: '',
    component: MediaIndexComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
