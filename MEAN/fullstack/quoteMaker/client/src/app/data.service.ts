import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private _http:Http) { }

  login(user, callback){
    this._http.post('/login', user).subscribe((res)=>{
      callback(res.json())
    })
  }

  checkSession(callback){
    this._http.get('/session').subscribe((res)=>{
      callback(res.json());
    })
  }

  addQuote(quote, callback){
    this._http.post('/addQuote', quote).subscribe((res)=>{
      callback(res.json());
    })
  }

  showQuotes(quote ,callback){
    this._http.get('/show', quote).subscribe((res)=>{
      callback(res.json());
      return res.json();
    })
  }
  onDelete(id, callback){
    this._http.get('/onDelete/'+id).subscribe(()=>{})
  }
  onLike(id, callback){
    this._http.get('/onLike/'+id).subscribe((res)=>{
      callback(res.json())
    })
  }

}