import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ListFacilityComponent} from "./facility/list-facility/list-facility.component";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {CustomerRoutingModule} from "./customer/customer-routing.module";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {CustomerModule} from "./customer/customer.module";
import {FacilityModule} from "./facility/facility.module";


const route: Routes = [

  {path: '', pathMatch: 'full',  redirectTo: 'home'},
  {path: 'home', component:HomeComponent},
  {path: 'customer', loadChildren:()=> import('./customer/customer.module').then(module=>module.CustomerModule) },
  {path: 'facility', loadChildren:()=> import('./facility/facility.module').then(module=>module.FacilityModule)},

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomerModule,
    FacilityModule,
    RouterModule.forRoot(route)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }
