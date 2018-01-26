import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class DataService {

  constructor(private _http:Http) { }

  login(user, callback){
    console.log(user);
    this._http.post('/login', user).subscribe((res)=>{
      callback(res.json())
    })
  }

checkSession(callback){
  this._http.get('/session').subscribe((res)=>{
    callback(res.json());
  })
}

showUsers(quote ,callback){
  this._http.get('/show', quote).subscribe((res)=>{
    callback(res.json());
    return res.json();
  })
}



}