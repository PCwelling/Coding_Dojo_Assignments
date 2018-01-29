import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionProfileComponent } from './question-profile/question-profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'add',
    pathMatch: 'full',
    component: AddComponent
  },
  {
    path: 'question-profile',
    pathMatch: 'full',
    component: QuestionProfileComponent
  },
  {
    path: 'question-profile/:questionId',
    pathMatch: 'full',
    component: QuestionProfileComponent
  },
  {
    path: 'answer',
    pathMatch: 'full',
    component: AnswerComponent
  },
  {
    path: 'answer/:questionId',
    pathMatch: 'full',
    component: AnswerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
