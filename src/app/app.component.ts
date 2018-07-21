import { Component } from '@angular/core';



@Component(
  {
    selector: 'app-root',
    template: `
    <div class = 'app'>
      <button (click)="handleClick()" >
      Change Name
      </button>
     <input
     type = "text"
      [ngModel]="name"
     (input) = "handleInput($event)">
    </div>
    <div>{{name}}</div>
    `,
    styleUrls: ['app.component.css']
  }
)
export class AppComponent {


 name = 'Todd';
  handleBlur(event: any) {
    this.name = event.target.value;
console.log(event);

  }
  handleClick() {
    this.name = 'Motto';

  }
  handleInput(event: any) {
    this.name = event.target.value;


  }









  constructor() {


  }


}
