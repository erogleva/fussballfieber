import { Routes } from '@angular/router';
import { SpielIndexComponent } from './spiel-index/spiel-index.component';

export const spielRoutes: Routes = [
  {
    path: '',
    component: SpielIndexComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
