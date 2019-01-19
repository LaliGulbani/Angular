export interface IUser {
  login: string;
  password: string;
}

export class User implements IUser {
  login: string;
  password: string;

  constructor() {
  }
}
