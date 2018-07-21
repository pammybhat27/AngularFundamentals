import { Component } from '@angular/core';



@Component(
  {
    selector: 'app-root',
    template: `
    <div class = 'app'>
      <button (click)="handleClick(username.value)" >
     Get value
      </button>
      <input
        type = "text" #username
       >

    <div>{{name}}</div>
    </div>
    `,
    styleUrls: ['app.component.css']
  }
)
export class AppComponent {


 name = 'Todd';

  handleClick(value: string) {
    console.log(value);

  }

}
