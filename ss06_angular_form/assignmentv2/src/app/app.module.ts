import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
