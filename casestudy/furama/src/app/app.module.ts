import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FacilityModule} from "./facility/facility.module";
import {CustomerModule} from "./customer/customer.module";
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FacilityModule,
    CustomerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
