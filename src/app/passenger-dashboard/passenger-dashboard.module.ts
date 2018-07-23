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
  passengers: Passenger[] = [{
    id: 1,
    fullName: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: [{name: 'Ted', age: 12}]
  },
    {
      id: 2,
      fullName: 'Rose',
      checkedIn: false

    },
    {
      id: 3,
      fullName: 'Testing',
      checkedIn: false

    }
  ];




}
