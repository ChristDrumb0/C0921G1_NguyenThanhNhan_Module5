import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FacilityModule} from "./facility/facility.module";
import {EmployeeModule} from "./employee/employee.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    FacilityModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
