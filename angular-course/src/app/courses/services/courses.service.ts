import { Injectable } from '@angular/core';
import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[];

  constructor() {
    this.courses = [
      {
        id: 1,
        title: 'Video Course 1',
        date: new Date(2018, 7, 9),
        duration: 243.654,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
          'Illum impedit laudantium vitae? A, adipisci assumenda earum ipsa magnam quos temporibus.',
        topRated: true
      },
      {
        id: 2,
        title: 'Video Course 2',
        date: new Date(2019, 10, 20),
        duration: 13,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
          'Illum impedit laudantium vitae? A, adipisci assumenda earum ipsa magnam quos temporibus.',
        topRated: false
      },
      {
        id: 3,
        title: 'Video Course 3',
        date: new Date(2018, 11, 4),
        duration: 127,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
          'Illum impedit laudantium vitae? A, adipisci assumenda earum ipsa magnam quos temporibus.',
        topRated: false
      },
      {
        id: 4,
        title: 'Video Course 4',
        date: new Date(2018, 8, 8),
        duration: 30,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
          'Illum impedit laudantium vitae? A, adipisci assumenda earum ipsa magnam quos temporibus.',
        topRated: false
      },
      {
        id: 5,
        title: 'Video Course 5',
        date: new Date(2018, 5, 25),
        duration: 120,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
          'Illum impedit laudantium vitae? A, adipisci assumenda earum ipsa magnam quos temporibus.',
        topRated: true
      }
    ];
  }

  getCourseIndexById(id: number): number {
    return this.courses.findIndex(course => {
      return course.id === id;
    });
  }

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course {
    const index = this.getCourseIndexById(id);
    return this.courses[index];
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  updateCourse(id: number, course: Course): void {
    const index = this.getCourseIndexById(id);
    this.courses[index] = course;
  }

  removeCourse(id: number): void {
    this.courses.splice(this.getCourseIndexById(id), 1);
  }
}
