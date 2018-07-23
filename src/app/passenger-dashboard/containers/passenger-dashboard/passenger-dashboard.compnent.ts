import {Component, OnInit } from '@angular/core';
import {Passenger} from '../../model/passenger.interface';


@Component({
selector: 'passenger-dashboard',
styleUrls: ['passenger-dashboard.component.scss'],
template: `
  <div>
    <ul>
      <li *ngFor="let passenger of passengers; let i = index">
          <span class = "status"
                [class.checked-in]="passenger.checkedIn">

          </span>

        {{ i }} : {{passenger.fullName}}
      </li>

    </ul>

    <h3> Airline Passengers</h3>
    <ul>
      <li *ngFor="let passenger of passengers; let i = index">
          <span class = "status"
                [ngStyle] ="{ backgroundColor: (passenger.checkedIn?'#2ecc71':'#c0392b')}"



          >

          </span>

        {{ i }} : {{passenger.fullName}}

        <div class = "date">
          Check in Date:
          {{passenger.checkInDate? (passenger.checkInDate | date | uppercase : 'yMMMMd') :'Not checked in'}}
        </div>

        <div class = "children">
          children: {{passenger.children?.length || 0}}
        </div>
      </li>

    </ul>


  </div>

`





})


export class PassengerDashboardComponent {

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
