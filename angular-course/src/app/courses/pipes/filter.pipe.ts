import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../course';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: Course[], searchQuery: string): Course[] {
    if (searchQuery) {
      const searchText = searchQuery.toLowerCase();
      const filtered = courses.filter( course => {
        return JSON.stringify(course).toLowerCase().includes(searchText);
      });
      if (filtered.length !== 0) {
        return filtered;
      } else {
        return null;
      }
    } else {
      return courses;
    }
  }

}
