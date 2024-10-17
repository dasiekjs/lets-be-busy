import {IssueId} from "../value-object/issue-id";
import {ProjectId} from "../value-object/project-id";

export class Issue {

  constructor(
    private readonly id: IssueId,
    private readonly projectId: ProjectId,
    private readonly title: string,
    private readonly description: string,
    private readonly createdAt: Date,
    private readonly updatedAt?: Date
  ) {
  }
}
