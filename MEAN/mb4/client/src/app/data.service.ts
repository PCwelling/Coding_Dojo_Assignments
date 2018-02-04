import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


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

  newSurvey(survey, cb){
    this._http.post('/newsurvey', survey).subscribe((res)=>{
      cb(res.json());
      return res.json();
    })
  }

  allPolls(poll, cb){
    this._http.get('/allpolls', poll).subscribe((res)=>{
      cb(res.json());
    })
  }

  deletePoll(id, cb){
    this._http.get('/deletepoll/'+id).subscribe(()=>{
      cb()
    })
  }

  showPoll(id, cb){
    this._http.post('/showpoll', id).subscribe((res)=>{
      cb(res.json());
      return res.json();
    })
  }

}
