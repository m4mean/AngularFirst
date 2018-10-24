import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyserviceService]
})
export class AppComponent {
  title: string;
constructor(private _service: MyserviceService) {
}

ngOnInit() {
  this.title = this._service.display();
}

}
