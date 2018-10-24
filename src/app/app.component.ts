import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  // pipes
  employees: any[] = [
    {
      code: 'code1',
      name: 'rohan dhiman',
      salary: 40000,
      dateOfBirth: '12/01/1999'
    },
    {
      code: 'code2',
      name: 'nisha dhiman',
      salary: 44000,
      dateOfBirth: '12/01/2011'
    },
    {
      code: 'code3',
      name: 'akshita dhiman',
      salary: 45000,
      dateOfBirth: '12/01/2012'
    },
    {
      code: 'code4',
      name: 'gifty dhiman',
      salary: 46000,
      dateOfBirth: '12/01/2013'
    },
    {
      code: 'code5',
      name: 'sonali dhiman',
      salary: 40000,
      dateOfBirth: '12/1/2014'
    }
  ];

  // parameterized pipes
  DOB = new Date(1947, 8, 5);

  // pipes multiple
  names : string = "rohan dhiman";

  currentData = new Date();

  mnumber = 0.3432432;

  public countries  =[
    {
      'id' : 1, 'country': 'india',
    },
    {
      'id' : 2, 'country': 'usa',
    },
    {
      'id' : 3, 'country': 'uk',
    },
    {
      'id' : 4, 'country': 'german',
    },
    {
      'id' : 1, 'country': 'russ',
    }
  ];

}

