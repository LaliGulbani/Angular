import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import {AuthGuard} from './core/guards/auth.guard';
import {AlreadyLoggedInGuard} from './core/guards/already-logged-in.guard';

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
  providers: [AuthGuard, AlreadyLoggedInGuard]
})
export class AppRoutingModule { }