export interface IAuthor {
    id: number;
    firstName: string;
    lastName: string;
  }
  
  export class Author implements IAuthor {
    public id: number;
    public firstName: string;
    public lastName: string;
  
    constructor() {  }
  }