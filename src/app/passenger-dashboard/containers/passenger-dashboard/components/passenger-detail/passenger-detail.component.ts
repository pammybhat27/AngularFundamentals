import { Component, Input } from '@angular/core';
import {Passenger} from '../../../../model/passenger.interface';


@Component({
  selector: 'passenger-detail',
  styleUrls:['passenger-detail.component.scss'],
  template: `
  <div>
    Detail Component
    <ul>
<li>
          <span class = "status"
                [ngStyle] ="{ backgroundColor: (detail.checkedIn?'#2ecc71':'#c0392b')}"
          >
          </span>
       {{detail.fullName}}
        <div class = "date">
          Check in Date:
          {{detail.checkInDate? (detail.checkInDate | date | uppercase : 'yMMMMd') :'Not checked in'}}
        </div>
        <div class = "children">
          children: {{detail.children?.length || 0}}
        </div>
      </li>
    </ul>
  </div>
  `

})



export class PassengerDetailComponent {
  @Input()
detail: Passenger;

}
