import {UserId} from "../value-object/user-id";

export class User {

  constructor(
    public readonly id: UserId,
    public readonly name: string,
    public readonly active: boolean
  ) {
  }
}
