import { Route } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { IssuesListComponent } from './pages/issues-list/issues-list.component';

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
    path: ':projectKey',
    children: [
      {
        path: 'issues',
        component: IssuesListComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];
