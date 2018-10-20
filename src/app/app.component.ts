import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template mai hum direct text echo karva skte hai but templateurl mai file print karava skte hai
  // template : '<h1>Hello man</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  peoplebycountry: any[] = [
    {
      'country' : 'india',
      'people' : [
        {
          'name' : 'rohan',
        },
        {
          'name' : 'sonali',
        },
        {
          'name' : 'akshita',
        },
        {
          'name' : 'gifty',
        }
        ]
    },
    {
      'country' : 'usa',
      'people' : [
        {
          'name' : 'john',
        },
        {
          'name' : 'camilli',
        }
        ]
    },
        ];

}
