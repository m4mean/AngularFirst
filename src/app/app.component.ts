import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // template mai hum direct text echo karva skte hai but templateurl mai file print karava skte hai
  template : `<h1>Hello man</h1> <button (click)="btnClick()">Click me</button>
  <!--ngIf this div is hide and show depend on variable this is structural-->
            <p *ngIf="chif">Hello man how are you</p>
            <div [ngStyle]="{'color':'red','font-weight':'bold'}">this ngStyle examples</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  chif = false;
  // this is components directives
  btnClick() {
    alert('working');
  }

}
