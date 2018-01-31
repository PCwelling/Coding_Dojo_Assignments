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

}
