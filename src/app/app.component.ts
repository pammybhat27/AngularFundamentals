import { Component } from '@angular/core';



@Component(
  {
    selector: 'app-root',
    template: `
    <div class = 'app'>
      <div>
        <h1>{{ title + "!" }}</h1>
        <h1 [innerHTML] = "title"></h1>
        <img [src] = "logo">
        <input type = "text" [value] = "name">
        <div>{{name}}</div>
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
 logo = 'src/img/logo.svg';

 name = 'Todd';










  constructor() {
    this.title = 'Ultimate Angular';

  }


}
