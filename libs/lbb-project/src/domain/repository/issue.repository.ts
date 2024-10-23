import {IssueId} from "../value-object/issue-id";
import {MaybeArrayAsync, MaybeAsync} from "@lets-be-busy/shared";
import {Issue} from "../entity/issue";
import {ProjectId} from "../value-object/project-id";

export interface IssueRepository {

  findById(issueId: IssueId): MaybeAsync<Issue | null>;

  findIssuesByProject(projectId: ProjectId): MaybeArrayAsync<Issue>;
}
