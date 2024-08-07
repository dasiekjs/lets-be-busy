import { Route } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { IssuesListComponent } from './pages/issues-list/issues-list.component';
import { IssueComponent } from './pages/issue/issue.component';
import { CreateNewProjectComponent } from './pages/create-new-project/create-new-project.component';

export const appRoutes: Route[] = [
  {
    path: 'list',
    component: ProjectListComponent
  },
  {
    path: 'create',
    component: CreateNewProjectComponent
  },
  {
    path: ':projectKey',
    children: [
      {
        path: 'issues',
        component: IssuesListComponent,
        children: [
          {
            path: '',
            component: IssueComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];
