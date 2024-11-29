import {ProjectId} from "../value-object/project-id";

export class Project {
  constructor(
    private readonly _id: ProjectId,
    private _name: string,
    private _issuesNum = 0,
    private _description: string | null
  ) {
  }


  get id(): ProjectId {
    return this._id;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get issuesNum(): number {
    return this._issuesNum;
  }

  set issuesNum(value: number) {
    this._issuesNum = value;
  }

  get description(): string | null {
    return this._description;
  }

  set description(value: string | null) {
    this._description = value;
  }
}
