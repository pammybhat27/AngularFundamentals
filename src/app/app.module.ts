import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {PassengerDashboardModule} from './passenger-dashboard/passenger-dashboard.module';

@NgModule({
  bootstrap: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    PassengerDashboardModule,


  ],
  declarations: [AppComponent]


})


export class AppModule {}
