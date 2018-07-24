import {Component, OnInit, OnChanges } from '@angular/core';
import {Passenger} from '../../model/passenger.interface';
import {PassengerDashboardService} from '../../passenger-dashboard.service';


@Component({
selector: 'passenger-dashboard',
styleUrls: ['passenger-dashboard.component.scss'],
template: `
  <div>
    <passenger-count
    [items] = "passengers"
    ></passenger-count>
    <passenger-detail
    *ngFor ="let passenger of passengers;"
    [detail] = "passenger"
    (remove)="handleRemove($event)"
    (edit) = "handleEdit($event)"
    ></passenger-detail>
    <div
      *ngFor ="let passenger of passengers;">
      {{passenger.fullName }}
    </div>

    <h3> Airline Passengers</h3>

 </div>

`
})


export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];
  constructor( private passengerService: PassengerDashboardService) {

  }
  ngOnInit() {
    // console.log(" Log Oninit");

    this.passengers = this.passengerService.getPassengers();
  }
  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);

  }

  handleEdit(event) {
  this.passengers = this.passengers.map((passenger: Passenger) => {

      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
    return passenger;
    }

  );
console.log(this.passengers);
  }


}
