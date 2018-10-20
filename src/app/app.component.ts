import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template mai hum direct text echo karva skte hai but templateurl mai file print karava skte hai
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  isValid = true;
  withElsePart = true;
  withElseThenPart = true;

  changeValue(b: boolean) {
    this.isValid =  b;
    this.withElsePart = b;
    this.withElseThenPart = b;
  }
}
