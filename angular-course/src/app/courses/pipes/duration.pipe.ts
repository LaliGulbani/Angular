import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    let result = '';
    const hours = Math.floor(value / 60);
    const minutes = Math.round(value % 60);
    if (hours) {
      result += hours + ' h ';
    }
    if (minutes) {
      result += minutes + ' min ';
    }
    return result;
  }

}
