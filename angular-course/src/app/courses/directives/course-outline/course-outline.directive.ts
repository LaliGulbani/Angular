import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCourseOutline]'
})
export class CourseOutlineDirective implements OnInit {
  @Input() appCourseOutline: Date;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    const creationDate = this.appCourseOutline.getTime();
    const currentDate = Date.now();
    if (creationDate > currentDate) {
      this.element.nativeElement.style.border = '4px solid #0288d1';
    } else if ((currentDate - creationDate) / (24 * 3600 * 1000) <= 14) {
      this.element.nativeElement.style.border = '4px solid #689f38';
    }

  }

}
