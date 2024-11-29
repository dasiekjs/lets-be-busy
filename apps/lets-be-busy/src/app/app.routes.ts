import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'projects',
    loadChildren: () => import('@lets-be-busy/project-feature').then(p => p.projectFeatureRoutes)
  },
  {
    path: '**',
    redirectTo: 'projects',
  }
];
