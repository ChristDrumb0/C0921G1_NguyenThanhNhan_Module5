import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TimelinesComponent} from './live-time/timelines/timelines.component';
import {MusicAppRoutingModule} from './music-app/music-app-routing.module';

const routes: Routes = [
  {path: 'timelines', component: TimelinesComponent},
  {path: '', loadChildren: () => import('./music-app/music-app-routing.module').then(module => module.MusicAppRoutingModule)},
  {
    path: 'product',
    loadChildren: () => import('./product-management/product-routing/product-routing.module').then(module => module.ProductRoutingModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MusicAppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
