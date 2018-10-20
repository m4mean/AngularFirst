import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import construct = Reflect.construct;

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  // styleUrls: ['./student.component.css']
  styles: ['#btn{background:red}', 'p{color:blue; font-size: 22px}'],
  preserveWhitespaces: true
})
export class StudentComponent implements OnInit {

  @Input() myinput: string;
  @Output() myoutput: EventEmitter<string> = new EventEmitter();
  outputString = 'Hi i am your child';
  constructor() { }

  ngOnInit() {
    console.log(this.myinput);
  }

  senddata() {
    this.myoutput.emit(this.outputString);
  }
}
