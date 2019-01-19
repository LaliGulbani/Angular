import { Route } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';

export const ROUTES: Route[] = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesComponent},
  {path: 'login', component: LoginComponent},
];
