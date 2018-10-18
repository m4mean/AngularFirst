import {Component, HostListener, Inject} from '@angular/core';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template mai hum direct text echo karva skte hai but templateurl mai file print karava skte hai
  // template : '<h1>Hello man</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  // first we have to generate service ng generate service myservice after that add here
  //parameter decorators for parameters inside class constructors e.g @Inject
  // is ke bad module ke andar service add karni hai
  constructor(@Inject(MyserviceService) myserviceService) {
    // class decorators
    console.log(myserviceService);
    console.log('yah second hai component call cosntuct');
  }

  // method decorators
  @HostListener('click', ['$event'])
  onhostclick(event: Event) {
     alert('hello');
  }
}
