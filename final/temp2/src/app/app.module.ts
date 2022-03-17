import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {AppRoutingModule} from './app-routing.module';
import { StackComponent } from './stack/stack.component';
import { CreateStackComponent } from './create-stack/create-stack.component';
import { EditStackComponent } from './edit-stack/edit-stack.component';
import { DeleteStackComponent } from './delete-stack/delete-stack.component';

@NgModule({
  declarations: [
    AppComponent,
    StackComponent,
    CreateStackComponent,
    EditStackComponent,
    DeleteStackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    RouterModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
