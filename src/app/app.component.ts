import { Component } from '@angular/core';



@Component(
  {
    selector: 'app-root',
    template: `
    <div class = 'app'>
      <>


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
