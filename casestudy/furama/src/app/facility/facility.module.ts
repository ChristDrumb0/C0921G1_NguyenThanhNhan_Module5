import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFacilityComponent } from './list-facility/list-facility.component';



@NgModule({
  declarations: [
    ListFacilityComponent
  ],
  exports: [
    ListFacilityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FacilityModule { }
