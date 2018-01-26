import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class MainService {
  allQuestionsArray: object[]
  allAnswersArray: object[]
  allQuestions: BehaviorSubject<any[]> = new BehaviorSubject([])
  allAnswers: BehaviorSubject<any[]> = new BehaviorSubject([])
  constructor(private _http: Http) { }
  AddQuestion(question, cb) {
    this._http.post('/add', question).subscribe((res) => {
      this.GrabAllQuestions;
      return cb(res.json());
    })
  }
  GrabAllQuestions() {
    this._http.get('/grab_all_questions').subscribe((res) => {
      this.allQuestionsArray = res.json();
      this.allQuestions.next(this.allQuestionsArray);
    })
  }
  GrabAllAnswers(questionId) {
    let questionObj = {};
    questionObj['questionId'] = questionId;
    this._http.post('/grab_all_answers', questionObj).subscribe((res) => {
      this.allAnswersArray = res.json()['_answers'];
      this.allAnswers.next(this.allAnswersArray);
    })
  }
  FindQuestion(questionId, cb) {
    let questionObj = {};
    questionObj['questionId'] = questionId;
    this._http.post('/find_question', questionObj).subscribe((res) => {
      cb(res.json());
    })
  }
  AnswerQuestion(answer, questionId, cb) {
    let answerObj = {};
    answerObj['answer'] = answer;
    answerObj['questionId'] = questionId;
    this._http.post('/answer_question', answerObj).subscribe((res) => {
      cb(res.json());
    })
  }
  AddLike(answerId, questionId){
    let answerIdObj = {};
    answerIdObj['answerId'] = answerId;
    this._http.post('/add_like', answerIdObj).subscribe((res)=>{
      this.GrabAllAnswers(questionId);
    })
  }
  login(user, cb) {
    this._http.post('/login', user).subscribe((res) => {
      return cb(res.json());
    })
  }

  CheckSession(cb) {
    this._http.get('/dashboard_backend').subscribe((res) => {
      return cb(res.json());
    })
  }
}
