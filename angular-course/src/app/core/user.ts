export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
}

export class User implements IUser {
  public id: number;
  public firstName: string;
  public lastName: string;

  constructor() {
  }
}
