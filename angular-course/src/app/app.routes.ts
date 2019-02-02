import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import {AuthGuard} from './core/guards/auth.guard';
import {AlreadyLoggedInGuard} from './core/guards/already-logged-in.guard';

export const ROUTES: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: 'courses', loadChildren: './courses/courses.module#CoursesModule', canActivate: [AuthGuard]},
  {path: 'login', loadChildren: './login/login.module#LoginModule', canActivate: [AlreadyLoggedInGuard]},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];