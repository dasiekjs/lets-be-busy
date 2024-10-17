import {UserId} from "../value-object/user-id";

export class User {

  constructor(
    private readonly id: UserId,
    private readonly name: string,
    private readonly active: boolean
  ) {
  }
}
