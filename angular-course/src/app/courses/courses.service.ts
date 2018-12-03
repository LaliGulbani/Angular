import { Injectable } from '@angular/core';
import {Course} from './course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  public getCourses(): Course[] {
    return [
      {
        id: 1,
        title: 'Video Course 1',
        date: '12.12.2018',
        duration: 60,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
          'Illum impedit laudantium vitae? A, adipisci assumenda earum ipsa magnam quos temporibus.'
      },
      {
        id: 2,
        title: 'Video Course 2',
        date: '20.11.2018',
        duration: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
          'Illum impedit laudantium vitae? A, adipisci assumenda earum ipsa magnam quos temporibus.'
      },
      {
        id: 3,
        title: 'Video Course 3',
        date: '04.12.2018',
        duration: 40,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
          'Illum impedit laudantium vitae? A, adipisci assumenda earum ipsa magnam quos temporibus.'
      },
      {
        id: 4,
        title: 'Video Course 4',
        date: '01.12.2018',
        duration: 30,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
          'Illum impedit laudantium vitae? A, adipisci assumenda earum ipsa magnam quos temporibus.'
      },
      {
        id: 5,
        title: 'Video Course 5',
        date: '25.10.2018',
        duration: 120,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
          'Illum impedit laudantium vitae? A, adipisci assumenda earum ipsa magnam quos temporibus.'
      }
    ];
  }
}
