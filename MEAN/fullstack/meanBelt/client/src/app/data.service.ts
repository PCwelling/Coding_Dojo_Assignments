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

  newItem(list, callback){
    console.log (list)
    this._http.post('/newitem', list).subscribe((res)=>{
      callback(res.json());
    })
  }

  showUsers(user,callback){
    this._http.get('/showuser', user).subscribe((res)=>{
      callback(res.json());
      return res.json();
    })
  }

  showItems(list, callback){
    this._http.get('/showitems', list).subscribe((res)=>{
      callback(res.json());
      return res.json();
    })
  }




}