import {ProjectId} from "../value-object/project-id";

export class Project {

  constructor(
    public readonly id: ProjectId,
    public readonly name: string,
    public readonly description?: string
  ) {
  }


}
