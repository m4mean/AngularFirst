import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  deptoobj: any[];
  title = 'my-app';
  constructor(private _service: MyserviceService) {
    this.deptoobj = this._service.dept;
  }
}
