
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES} from './courses.routes';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class CoursesRoutingModule { }