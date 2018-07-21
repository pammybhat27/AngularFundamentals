import { Component } from '@angular/core';



@Component(
  {
    selector: 'app-root',
    template: `
    <div class = 'app'>
      <div>
      {{ title + "!" }}
      </div>
      <div>
      {{numberOne + numberTwo}}

    </div>
      <div>
        {{isHappy ? ':)':':('}}
      </div>
    </div>

    `,
    styleUrls: ['app.component.css']
  }
)
export class AppComponent {
  title: string;
  isHappy = true;
  numberOne = 1;
  numberTwo = 2;












  constructor() {
    this.title = 'Ultimate Angular';

  }


}
