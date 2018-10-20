import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
  // template mai hum direct text echo karva skte hai but templateurl mai file print karava skte hai
  // template : '<h1>Hello man</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  students: any[];
  constructor() {
   this.students = [
     {
     studentId: 1,
     studentName: 'rohan',
     gender: 'male',
     age: 25,
     course: 'mca'
   },
     {
       studentId: 2,
       studentName: 'sonali',
       gender: 'female',
       age: 20,
       course: 'bcom'
     },
     {
       studentId: 3,
       studentName: 'nisha',
       gender: 'female',
       age: 21,
       course: 'bca'
     }
   ];
  }
  getstudent(): void {
    this.students = [
      {
        studentId: 1,
        studentName: 'rohan',
        gender: 'male',
        age: 25,
        course: 'mca'
      },
      {
        studentId: 2,
        studentName: 'sonali',
        gender: 'female',
        age: 20,
        course: 'bcom'
      },
      {
        studentId: 3,
        studentName: 'nisha',
        gender: 'female',
        age: 21,
        course: 'bca'
      },
      {
        studentId: 4,
        studentName: 'gify',
        gender: 'female',
        age: 21,
        course: 'ba'
      },
      {
        studentId: 5,
        studentName: 'akshita',
        gender: 'female',
        age: 22,
        course: 'mba'
      }
    ];
  }
  trackbystudentId(index: number, employee: any): string {
        return employee.studentId;
  }
}
