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

  showUsers(user,callback){
    this._http.get('/showuser', user).subscribe((res)=>{
      callback(res.json());
      return res.json();
    })
  }

  addFriend(id, cb){
    this._http.get('/addfriend/'+id).subscribe((res)=>{
      cb(res.json())
    })
  }

  deleteFriend(id, cb){
    this._http.get('/deletefriend/'+id).subscribe(()=>{
      cb()
    })
  }

  showProfile(params, cb){
    this._http.get('/showprofile', params).subscribe((res)=>{
      cb(res.json)
    })
  }




  //////////////////
}
