import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateStackComponent} from './create-stack/create-stack.component';
import {EditStackComponent} from './edit-stack/edit-stack.component';
import {StackComponent} from './stack/stack.component';

const routes: Routes = [
  {path: '', component: StackComponent},
  {path: 'create', component: CreateStackComponent},
  {path: 'edit/:id', component: EditStackComponent}
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
