import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  // interpolation binding
  colspan: number = 3;
  name = 'rohan hacker';
  gffirst: string = 'nisha';
  gflast:string = 'dhiman';

  // attribute binding
  bdr: number = 5;
  wid: number = 350;
  hig: number = 150;

  myonClick() {
    alert('alert event');
  }

  data : string = '';
  dataOne: string = 'rohan';

}
