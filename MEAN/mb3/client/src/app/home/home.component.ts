import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: Object;
  allusers: Array<any>;
  user: Object;

  constructor(private _dataService:DataService, private _router:Router) { 
    
    this.username = {name: ''};
    this.allusers = [];
    this.user = {name: ''};

  }

  checkSession(){
    this._dataService.checkSession((data)=>{
      this.username = data.user
      if(!this.username){
        this._router.navigate(['/'])
      }
    })
  }

  showUsers(){
    this._dataService.showUsers(this.allusers, (data)=>{
      this.allusers = data
    })
  }

  addFriend(id, idx){
    this._dataService.addFriend(id,(data)=>{
      this.user[idx] = data;
    })
  }
  removeFriend(id, idx){
    //console.log('what the duce')
  }

  deleteFriend(id, idx){
    this._dataService.deleteFriend(id,()=>{
     for(let user  in this.allusers){
       if(id == this.allusers[user]._id){
         this.allusers.splice(parseInt(user))
       }
     }
    })
  }

  ngOnInit() {
    this.checkSession();
    this.showUsers();
  }

}
