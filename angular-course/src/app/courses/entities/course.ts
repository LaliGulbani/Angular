export interface ICourse {
  id: number;
  name: string;
  date: Date;
  length: number;
  description: string;
  isTopRated: boolean;
  authors: Author[];
}
export class Course implements ICourse {
  public id: number;
  public name: string;
  public date: Date;
  public length: number;
  public description: string;
  public isTopRated: boolean;
  public authors: Author[];

  constructor() {
  }
}
