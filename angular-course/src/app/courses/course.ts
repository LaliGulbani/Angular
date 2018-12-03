export interface ICourse {
  id: number;
  title: string;
  date: string;
  duration: number;
  description: string;
}
export class Course implements ICourse {
  public id: number;
  public title: string;
  public date: string;
  public duration: number;
  public description: string;

  constructor() {
  }
}
