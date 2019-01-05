import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: Course[]): Course[] {
    return courses.sort((a: Course, b: Course) => {
      return b.date.getTime() - a.date.getTime();
    });
  }

}
