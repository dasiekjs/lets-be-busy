import {Issue, IssueId, IssueRepository, Project, ProjectId} from "@lets-be-busy/lbb-project";
import {MaybeArrayAsync, MaybeAsync} from "@lets-be-busy/shared";
import {IssueType} from "@lets-be-busy/lbb-project";
import {delay, of} from "rxjs";

export class InMemoryIssueRepository implements IssueRepository {

  constructor(
    private readonly minQueryTime: number = 0,
    private readonly maxQueryTime: number = 0
  ) {
  }

  private _issues: Record<IssueId['value'], Issue> = {
    'LBB-1' : {
      id: new IssueId('LBB-1'),
      title: "Let's be busy development",
      description: "Ticket for development this application",
      project: new Project(new ProjectId('LBB'), "Let's be busy"),
      createdAt: new Date('2024-10-12'),
      type: new IssueType('task', 'Task')
    },
    'LBB-2' : {
      id: new IssueId('LBB-2'),
      title: "Ticket for take a rest",
      description: "Ticket for development this application",
      project: new Project(new ProjectId('LBB'), "Let's be busy"),
      createdAt: new Date('2024-10-12'),
      type: new IssueType('spike', 'Spike')
    },
    'LBB-3' : {
      id: new IssueId('LBB-3'),
      title: "Another alternative item",
      description: "Ticket for development this application",
      project: new Project(new ProjectId('LBB'), "Let's be busy"),
      createdAt: new Date('2024-10-12'),
      type: new IssueType('spike', 'Spike')
    }
  };

  findIssuesByProject(projectId: ProjectId): MaybeArrayAsync<Issue> {

    const foundedIssues = Object.values(this._issues).filter((i) => {
      return i.project.id.value === projectId.value;
    });

    return of(foundedIssues)
      .pipe(
        delay(this.getQueryTime())
      )
  }

  findById(issueId: IssueId): MaybeAsync<Issue | null> {
    const foundedIssue = this._issues[issueId.value] ?? null;

    return of(foundedIssue)
      .pipe(
        delay(this.getQueryTime())
      )
  }

  private getQueryTime() {
    const {minQueryTime, maxQueryTime} = this;
    return Math.floor(Math.random() * (maxQueryTime - minQueryTime + 1) + minQueryTime);
  }
}
