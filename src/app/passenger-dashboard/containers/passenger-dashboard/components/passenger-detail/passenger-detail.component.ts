import { Component, Input , Output, EventEmitter} from '@angular/core';
import {Passenger} from '../../../../model/passenger.interface';


@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
  <div>
    Detail Component
    <ul>
<li>
          <span class = "status"
                [ngStyle] ="{ backgroundColor: (detail.checkedIn?'#2ecc71':'#c0392b')}"
          >
          </span>
  <div *ngIf = "editing">
    <input type = "text"
           [value] = "detail.fullName"
           (input) = "onChangeName(name.value)"
    #name>
  </div>

  <div *ngIf !="editing">
       {{detail.fullName}}
  </div>
        <div class = "date">
          Check in Date:
          {{detail.checkInDate? (detail.checkInDate | date | uppercase : 'yMMMMd') :'Not checked in'}}
        </div>
        <div class = "children">
          children: {{detail.children?.length || 0}}
        </div>
      </li>
    </ul>
    <button
    (click)
 = "toggleEdit()">

   {{editing ? 'Done': 'Edit' }}  </button>
    <button
      (click)
        = "onRemove()">

      Remove  </button>

    
    
  </div>
  `

})



export class PassengerDetailComponent {
  @Input()
   detail: Passenger;

  editing = false;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();



  onChangeName(value: string) {
    this.detail.fullName = value;

  }
  toggleEdit() {
    this.editing = !this.editing;

  }

  onRemove() {
  this.remove.emit(this.detail);

  }


}
