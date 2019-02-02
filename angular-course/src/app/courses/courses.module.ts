import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CoursesRoutingModule} from "./courses-routing.module";
import {CoursesService} from "./services/courses.service";
import * as components from './components';
import * as directives from './directives';
import * as pipes from './pipes';


const modules = [CommonModule];

function toArray(obj){
  return Object.keys(obj).map(k => obj(k));
}

const declarations = [
  ...toArray(components),
  ...toArray(directives),
  ...toArray(pipes)
]
@NgModule({
  imports: [...modules],
  exports: [
    FormsModule,
    CoursesRoutingModule
  ],
  declarations: [
    ...declarations
  ],
  providers: [CoursesService]
})
export class CoursesModule { }
