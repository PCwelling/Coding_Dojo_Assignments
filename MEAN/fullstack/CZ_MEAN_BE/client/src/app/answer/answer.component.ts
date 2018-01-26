import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  userName: string
  curQuestion: string
  curDescription: string
  questionId: string
  errorMsg: string = ""
  answer: object = { answer: "", description: "" }
  constructor(private _mainService: MainService, private _router: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe(params => {
      this.questionId = params.get('questionId');
      this._mainService.FindQuestion(this.questionId, (res) => {
        this.curQuestion = res['question'];
        this.curDescription = res['description']
      })
    })
  }
  AnswerQuestion() {
    this.answer['answer'] = this.answer['answer'].trim();
    this.answer['description'] = this.answer['description'].trim();
    if (this.answer['answer'].length >= 5) {
      this.errorMsg = "";
      this._mainService.AnswerQuestion(this.answer, this.questionId, (res) => {
        this._router.navigate(['dashboard']);
      })
    } else {
      this.errorMsg = "Answer must be at least 5 characters.";
    }
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
