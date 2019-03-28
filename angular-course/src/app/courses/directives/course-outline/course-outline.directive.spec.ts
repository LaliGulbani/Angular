import { CourseOutlineDirective } from './course-outline.directive';
import {ElementRef} from '@angular/core';

describe('CourseOutlineDirective', () => {
  it('should create an instance', () => {
    const element = new ElementRef(document.createElement('div'));
    const directive = new CourseOutlineDirective(element);
    expect(directive).toBeTruthy();
  });
});
