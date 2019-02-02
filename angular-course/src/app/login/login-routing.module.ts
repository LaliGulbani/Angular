import { NgModule } from '@angular/core';
import {ROUTES} from "./login.routes";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }