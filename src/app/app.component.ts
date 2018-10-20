import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  users = [
    'rohan',
    'nisha',
    'akshita',
    'vaishali'
  ];

  getCssClass(flag: string) {
    let csscls;
    if (flag === 'nightmode') {
      csscls = {
        'one': true,
        'two': true
      };
    } else {
      csscls = {
        'four': true,
        'three': true
      };
    }
    return csscls;
  }
}
