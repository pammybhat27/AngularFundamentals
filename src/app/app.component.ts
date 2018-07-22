import { Component } from '@angular/core';



@Component(
  {
    selector: 'app-root',
    template: `
    <div class = 'app'>
      <input
        type = "text"
        [value] = "name"
        (input)= "handleChange($event.target.value)"
       >

    <div *ngIf="name.length > 2 ">
     Searching for .... {{name}}</div>
    </div>
    `,
    styleUrls: ['app.component.css']
  }

)
export class AppComponent {


 name = 'Todd';

  handleChange(value: string) {
    this.name = value;

  }

}
