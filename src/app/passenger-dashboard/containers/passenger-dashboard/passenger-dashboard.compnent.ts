import {Component, OnInit } from '@angular/core';
import {Passenger} from '../../model/passenger.interface';


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
    <h3> Airline Passengers</h3>

 </div>

`
})


export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];
  constructor() {

  }
  ngOnInit() {
    // console.log(" Log Oninit");

    this.passengers = [{
      id: 1,
      fullName: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: [{name: 'Ted', age: 12}]
    },
      {
        id: 2,
        fullName: 'Rose',
        checkedIn: false,
        children: null

      },
      {
        id: 3,
        fullName: 'Testing',
        checkedIn: false,
        children: null

      }
    ];

  }
  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);

  }

  handleEdit(event) {
    console.log(event);

  }


}
