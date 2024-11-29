import {IssueId} from "../value-object/issue-id";
import {ProjectId} from "../value-object/project-id";

class Issue {
  constructor(
    private readonly _id: IssueId,
    private readonly _projectId: ProjectId,
    private _title: string,
    private _content: string | null,
    private _createdAt: Date,
    private _updatedAt: Date | null
  ) {
  }


  get id(): IssueId {
    return this._id;
  }

  get projectId(): ProjectId {
    return this._projectId;
  }

  get title(): string {
    return this._title;
  }

  get content(): string | null {
    return this._content;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date | null {
    return this._updatedAt ?? null;
  }

  set title(value: string) {
    this._title = value;
  }

  set content(value: string | null) {
    this._content = value;
  }

  set updatedAt(value: Date) {
    this._updatedAt = value;
  }
}
