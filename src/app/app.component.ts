import { Component } from '@angular/core';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  Register(regForm: any) {
    // you can also use debugger
    // debugger;
    // console.log(regForm);

    const firstname = regForm.controls.firstname.value;
    const lastname = regForm.controls.lastname.value;
    const email = regForm.controls.email.value;

    console.log(`firs name ${firstname} last name ${lastname} email ${email}`);

  }

}
