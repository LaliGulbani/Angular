export interface IName {
    first: string;
    last: string;
  }
  
  export class Name implements IName {
    public first: string;
    public last: string;
  
    constructor() {  }
  }