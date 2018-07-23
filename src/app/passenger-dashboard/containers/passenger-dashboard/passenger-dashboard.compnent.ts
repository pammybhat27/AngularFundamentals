import {Component} from '@angular/core';



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



}
