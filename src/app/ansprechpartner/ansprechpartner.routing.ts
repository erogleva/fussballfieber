import { Routes } from '@angular/router';
import { AnsprechpartnerIndexComponent } from './ansprechpartner-index/ansprechpartner-index.component';

export const ansprechpartnerRoutes: Routes = [
  {
    path: '',
    component: AnsprechpartnerIndexComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
