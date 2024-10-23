import {IssueId} from "../value-object/issue-id";
import {Project} from "./project";
import {IssueType} from "../value-object/issue-type";

export interface Issue {
  id: IssueId;
  project: Project;
  title: string;
  description: string | null;
  createdAt: Date;
  type: IssueType;
}
