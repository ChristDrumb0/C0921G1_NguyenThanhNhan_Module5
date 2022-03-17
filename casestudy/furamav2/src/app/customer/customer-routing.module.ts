import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {ListCustomerComponent} from "./list-customer/list-customer.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";

const customerRoute: Routes = [

  // {
  //   path: 'customer', component: ListCustomerComponent, children: [
  //     {path: 'create', component: CreateCustomerComponent},
  //     {path: 'edit/:id', component: EditCustomerComponent},
  //   ]
  // }

  {path: 'customer', component: ListCustomerComponent},
  {path: 'customer/create', component: CreateCustomerComponent},
  {path: 'edit/:id', component: EditCustomerComponent},
]


// @ts-ignore
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoute)
  ],
  exports: [
    RouterModule
  ]
})


export class CustomerRoutingModule {
}
