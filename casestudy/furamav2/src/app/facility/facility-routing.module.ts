import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListCustomerComponent} from "../customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "../customer/create-customer/create-customer.component";
import {EditCustomerComponent} from "../customer/edit-customer/edit-customer.component";
import {ListFacilityComponent} from "./list-facility/list-facility.component";

const facilityRoute: Routes =[
  {
    path: 'facility', component: ListFacilityComponent, children: [
      // {path: 'create', component: CreateCustomerComponent},
      // {path: 'edit/:id', component: EditCustomerComponent},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(facilityRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class FacilityRoutingModule { }
