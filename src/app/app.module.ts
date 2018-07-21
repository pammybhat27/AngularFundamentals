import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { CommonModule} from '@angular/common';

@NgModule({
  bootstrap: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [AppComponent]


})


export class AppModule {}
