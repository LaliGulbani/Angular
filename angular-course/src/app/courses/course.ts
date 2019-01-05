export interface ICourse {
  id: number;
  title: string;
  date: Date;
  duration: number;
  description: string;
}
export class Course implements ICourse {
  public id: number;
  public title: string;
  public date: Date;
  public duration: number;
  public description: string;
  public topRated: boolean;

  constructor() {
  }
}
