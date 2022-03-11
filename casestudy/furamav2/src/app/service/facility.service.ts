import { Injectable } from '@angular/core';
import {FacilityModule} from "../facility/facility.module";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList = FacilityModule
  constructor() { }
}
