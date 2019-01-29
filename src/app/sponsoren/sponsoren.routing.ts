import { Routes } from '@angular/router';
import { SponsorenIndexComponent } from './sponsoren-index/sponsoren-index.component';

export const sponsorenRoutes: Routes = [
  {
    path: '',
    component: SponsorenIndexComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
