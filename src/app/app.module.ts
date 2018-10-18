import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentloginComponent } from './studentPortal/studentlogin/studentlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentloginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
