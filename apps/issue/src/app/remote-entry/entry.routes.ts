import { Route } from '@angular/router';
import {DisplayIssueComponent} from "../page/display-issue/dislay-issue.component";
import {IssuesListComponent} from "../page/issue-list/issue-list.component";

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: IssuesListComponent
  },
  {
    path: ':id',
    component: DisplayIssueComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
