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
      <passenger-dashboard></passenger-dashboard>
      <h3> Airline Passengers</h3>












    </div>
    `,
    styleUrls: ['app.component.scss']
  }

)
export class AppComponent {




}
