import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Week1Component } from './components/week1/week1.component';
import { Week2Component } from './components/week2/week2.component';

@NgModule({
  declarations: [
    AppComponent,
    Week1Component,
    Week2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
