import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {CoursesModule} from './courses/courses.module';
import { AuthorizationService } from './core/services/authorization.service';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    CoreModule,
    CoursesModule,
    LoginModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
