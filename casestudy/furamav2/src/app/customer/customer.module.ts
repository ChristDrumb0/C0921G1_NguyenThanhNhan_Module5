import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import {CustomerRoutingModule} from "./customer-routing.module";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {Ng2SearchPipeModule} from "ng2-search-filter";


@NgModule({
  declarations: [
    CreateCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
  ],
  exports: [
    CreateCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class CustomerModule {
}
