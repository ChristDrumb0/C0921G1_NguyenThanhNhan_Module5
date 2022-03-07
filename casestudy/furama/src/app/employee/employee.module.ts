import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';


@NgModule({
  declarations: [
    CreateEmployeeComponent,
    EditEmployeeComponent,
  ],
  exports: [
    CreateEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
