import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// import {NgModule} from '@angular/core';
import {NgModule} from "@angular/core";
// import {BrowserModule} from '@angular/platform-browser';
// @ts-ignore
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FacilityModule} from "./facility/facility.module";
import {CustomerModule} from "./customer/customer.module";
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";



// @ts-ignore
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
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
