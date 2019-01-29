import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const pageLayoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'startseite',
        loadChildren: '../startseite/startseite.module#StartseiteModule'
      },
      {
        path: 'event',
        loadChildren: '../event/event.module#EventModule'
      },
      {
        path: 'media',
        loadChildren: '../media/media.module#MediaModule'
      },
      {
        path: 'spiel',
        loadChildren: '../spiel/spiel.module#SpielModule'
      },
      {
        path: 'sponsoren',
        loadChildren: '../sponsoren/sponsoren.module#SponsorenModule'
      },

      {
        path: 'ansprechpartner',
        loadChildren: '../ansprechpartner/ansprechpartner.module#AnsprechpartnerModule'
      },
      {
        path: '**',
        redirectTo: 'startseite'
      }
    ]
  }
];
