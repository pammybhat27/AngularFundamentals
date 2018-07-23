import { Component } from '@angular/core';
import {Passenger} from '../../../../model/passenger.interface';


@Component({
  selector: 'passenger-count',
  template: `
  <div>
    Count Component
  </div>
  `

})



export class PassengerCountComponent {
items: Passenger[];

}
