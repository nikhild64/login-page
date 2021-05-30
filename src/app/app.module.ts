import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginlibModule } from 'projects/loginlib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    LoginlibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
