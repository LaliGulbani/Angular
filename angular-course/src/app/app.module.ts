import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptorService} from './core/services/token-interceptor.service';
import {AppRoutingModule} from "./app-routing.module";

const angularModules = [
  BrowserModule,
  CoreModule,
  HttpClientModule,
  AppRoutingModule
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [...angularModules  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
