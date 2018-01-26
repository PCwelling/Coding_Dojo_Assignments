import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-profile',
  templateUrl: './question-profile.component.html',
  styleUrls: ['./question-profile.component.css']
})
export class QuestionProfileComponent implements OnInit {
  curQuestion: string
  curDescription: string
  questionId: string
  userName: string
  allAnswers: object[] = []
  constructor(private _mainService: MainService, private _router: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe(params => {
      this.questionId = params.get('questionId');
      this._mainService.FindQuestion(this.questionId, (res) => {
        this.curQuestion = res['question'];
        this.curDescription = res['description']
        this._mainService.allAnswers.subscribe((allAnswers) => {
          this.allAnswers = allAnswers;
        })
        this._mainService.GrabAllAnswers(this.questionId);
      })
    })
  }
  AddLike(answerId){
    this._mainService.AddLike(answerId, this.questionId);
  }
  ngOnInit() {
    this._mainService.CheckSession((userName) => {
      if (userName['user']) {
        this.userName = userName['user'];
      } else {
        this._router.navigate(['/']);
      }
    })
  }

}
