import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  @HostListener('click') onClick () {
    alert('working');
  }

  @HostListener('mouseover') mouseover() {
    this.changeText();
  }

   changeText() {
    alert('working');
   }
}
