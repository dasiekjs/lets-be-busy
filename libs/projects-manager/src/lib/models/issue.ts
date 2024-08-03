import { Project } from './project';

export interface Issue {
  id: string;
  title: string;
  description: string;
  parentIssue: Issue;
  project: Project;
  code: string;
}
