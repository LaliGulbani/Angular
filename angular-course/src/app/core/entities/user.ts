import {Name} from './name';

export interface IUser {
  id: number;
  login: string;
  fakeToken: string;
  name: Name;
  password;
}

export class User implements IUser {
  public id: number;
  public login: string;
  public fakeToken: string;
  public name: Name;
  public password: string;


  constructor() {
  }
}
