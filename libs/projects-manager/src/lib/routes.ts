import { Route } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';

export const appRoutes: Route[] = [
  {
    path: 'list',
    component: ProjectListComponent
  },
  {
    path: 'create',
    component: ProjectListComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];
