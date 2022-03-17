import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFacilityComponent } from './list-facility/list-facility.component';
import {FacilityRoutingModule} from "./facility-routing.module";



@NgModule({
  declarations: [
    ListFacilityComponent
  ],
  exports: [
    ListFacilityComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule
  ]
})
export class FacilityModule { }
