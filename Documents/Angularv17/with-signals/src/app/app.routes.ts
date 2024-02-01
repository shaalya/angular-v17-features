import { Routes } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: FeatureComponent,
    loadChildren: () =>
      import('./feature/feature.routes').then((m) => m.FEATURE_ROUTES),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
];
