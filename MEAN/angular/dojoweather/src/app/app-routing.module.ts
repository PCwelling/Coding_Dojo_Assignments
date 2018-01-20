import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CityComponent} from './city/city.component';

const routes: Routes = [
  {path: '', redirectTo: '/seattle', pathMatch: 'full'},
  {path: ':city', component: CityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
