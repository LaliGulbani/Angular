import { Routes } from '@angular/router';
import {AddCourseComponent} from './components/add-course/add-course.component';
import {EditCourseComponent} from './components/edit-course/edit-course.component';
import {CoursesListComponent} from './components/courses-list/courses-list.component';


export const ROUTES: Routes = [
  {path: '', component: CoursesListComponent},
  {path: 'new', component: AddCourseComponent},
  {path: ':id', component: EditCourseComponent}
];
