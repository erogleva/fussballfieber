import { Routes } from '@angular/router';
import { EventIndexComponent } from './event-index/event-index.component';

export const eventRoutes: Routes = [
  {
    path: '',
    component: EventIndexComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
