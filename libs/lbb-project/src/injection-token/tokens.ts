import {InjectionToken} from "@angular/core";
import {IssueRepository} from "@lets-be-busy/lbb-project";

export const LbbIssueRepository = new InjectionToken<IssueRepository>('lbb.issue-repository');
