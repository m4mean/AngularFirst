import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  peoples: any[] = [
    {
      'name' : 'rohan',
      'country' : 'india'
    },
    {
      'name' : 'nisha',
      'country' : 'canada'
    },
    {
      'name' : 'camilli',
      'country' : 'german'
    },
    {
      'name' : 'akshita',
      'country' : 'india'
    }
  ];

  getColor(country) {
    switch (country) {
      case 'india':
        return 'green';
      case 'canada':
        return 'red';
      case 'german':
        return 'blue';
    }
  }
}
