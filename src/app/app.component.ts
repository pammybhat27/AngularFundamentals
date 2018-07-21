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
       >

    <div>{{name}}</div>
    </div>
    `,
    styleUrls: ['app.component.css']
  }
)
export class AppComponent {


 name = 'Todd';

  handleClick() {
    this.name = 'Motto';

  }

}
