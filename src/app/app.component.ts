import { Component } from '@angular/core';

interface  Passenger {
id: number;
  fullName: string;
  checkedIn: boolean;

}

@Component(
  {
    selector: 'app-root',
    template: `
    <div class = 'app'>
      <h3> Airline Passengers</h3>


    </div>
    `,
    styleUrls: ['app.component.css']
  }

)
export class AppComponent {

  passengers: Passenger[] = [{
  id: 1,
  fullName: 'Stephen',
    checkedIn: true
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
