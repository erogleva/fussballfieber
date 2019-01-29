import { Routes } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './page-layout/page-layout.module#PageLayoutModule',
    canActivateChild: [MetaGuard]
  }
];
