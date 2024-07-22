import { Route } from '@angular/router';
import { ApplicationLayoutComponent } from '../components/application-layout/application-layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ApplicationLayoutComponent,
    children: [
      {
        path: 'projects',
        loadChildren: () => import('@lets-be-busy/projects-manager').then((m) => m.appRoutes)
      },
      {
        path: '**',
        redirectTo: 'projects'
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('@lets-be-busy/login').then(m => m.LoginComponent)
  },
  {
    path: '**',
    redirectTo: 'projects'
  }
];
