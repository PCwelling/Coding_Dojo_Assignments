import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MakesurveyComponent } from './makesurvey/makesurvey.component';
import { ViewsurveyComponent } from './viewsurvey/viewsurvey.component';

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'newpoll', component: MakesurveyComponent},
  {path: 'home/poll/:id', component: ViewsurveyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
