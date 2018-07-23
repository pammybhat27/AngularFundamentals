import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.compnent';

@NgModule({
  declarations: [
    PassengerDashboardComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [PassengerDashboardComponent]



})

export class PassengerDashboardModule {




}
