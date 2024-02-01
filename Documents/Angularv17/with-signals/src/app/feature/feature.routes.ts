import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const FEATURE_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    {
      path: 'vehicles',
      loadComponent: () =>
        import('./vehicles/vehicle-shell/vehicle-shell.component').then(
          (c) => c.VehicleShellComponent
        ),
    },
    {
      path: 'cart',
      loadComponent: () =>
        import('./cart/cart-shell/cart-shell.component').then(
          (c) => c.CartShellComponent
        ),
    },
    {
      path: 'images',
      loadComponent: () =>
        import('./images/images.component').then((c) => c.ImagesComponent),
    },
    {
      path: 'deferrable-views',
      loadComponent: () =>
        import('./deferrable-views/deferrable-views.component').then((c) => c.DeferrableViewsComponent),
    },
    
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  ];