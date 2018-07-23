import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Containers
import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.compnent';

// Components
import { PassengerDetailComponent} from './containers/passenger-dashboard/components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent  } from './containers/passenger-dashboard/components/passenger-count/passenger-count.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [PassengerDashboardComponent]



})

export class PassengerDashboardModule {



}
