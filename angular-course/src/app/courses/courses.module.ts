import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { CoursesComponent } from './courses.component';
import { CourseOutlineDirective } from './directives/course-outline.directive';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CoursesComponent
  ],
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesComponent,
    CourseOutlineDirective,
    DurationPipe,
    OrderByPipe
  ],
  providers: [
    FilterPipe
  ]
})
export class CoursesModule { }
