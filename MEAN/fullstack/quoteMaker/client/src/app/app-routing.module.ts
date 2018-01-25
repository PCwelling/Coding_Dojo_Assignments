import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {QuotesComponent} from './quotes/quotes.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'quotes', pathMatch: 'full', component: QuotesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
