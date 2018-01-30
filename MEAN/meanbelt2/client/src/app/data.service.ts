import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private _http:Http) { }

  login(user, cb){
    this._http.post('/login', user).subscribe((res)=>{
      cb(res.json())
    })
  }

  checkSession(callback){
    this._http.get('/session').subscribe((res)=>{
      callback(res.json());
    })
  }

  //// addquestion component ////

  newQuestion(trivia, cb){
    this._http.post('/newquestion', trivia).subscribe((res)=>{
      cb(res.json());
      return res.json();
    })
  }

  //// playgame component ////

  newGame(cb){
    this._http.get('/newgame').subscribe((res)=>{
      cb(res.json());
    })
  }


}
