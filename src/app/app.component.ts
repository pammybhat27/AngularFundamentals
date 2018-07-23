import { Component } from '@angular/core';

interface Child {
  name: string;
  age: number;

}

interface  Passenger {
id: number;
  fullName: string;
  checkedIn: boolean;
  checkInDate?: number;
  children: Child[] | null;
}

@Component(
  {
    selector: 'app-root',
    template: `
    <div class = 'app'>
      <h3> Airline Passengers</h3>












    </div>
    `,
    styleUrls: ['app.component.scss']
  }

)
export class AppComponent {

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
