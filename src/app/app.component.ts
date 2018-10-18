import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template mai hum direct text echo karva skte hai but templateurl mai file print karava skte hai
  // template : '<h1>Hello man</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor() {
    // class decorators
    console.log('yah second hai component call cosntuct');
  }

  // method decorators
  @HostListener('click', ['$event'])
  onhostclick(event: Event) {
     alert('hello');
  }
}
