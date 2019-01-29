import { Routes } from '@angular/router';
import { StartseiteIndexComponent } from './startseite-index/startseite-index.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';

export const startseiteRoutes: Routes = [
  {
    path: '',
    component: StartseiteIndexComponent
  },
  {
    path: 'datenschutz',
    component: DatenschutzComponent
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  }/* ,
  {
    path: 'media',
    component: MediaComponent
  } */,
  {
    path: '**',
    redirectTo: ''
  }
];
