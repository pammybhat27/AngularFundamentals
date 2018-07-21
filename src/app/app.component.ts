import { Component } from '@angular/core';



@Component(
  {
    selector: 'app-root',
    template: `
    <div>
      {{ title }}
    </div>

    `,
    styleUrls: ['app.component.css']
  }
)
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Ultimate Angular';

  }


}
