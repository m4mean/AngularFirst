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
  people: any[] = [
    {
      'name' : 'rohan dhiman'
    },
    {
      'name' : 'sonali dhiman'
    },
    {
      'name' : 'nisha dhiman'
    },
    {
      'name' : 'vaishali dhiman'
    },
    {
      'name' : 'gifty dhiman'
    }
  ];
}
