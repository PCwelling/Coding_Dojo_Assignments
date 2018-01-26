import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: object;
  allusers;

  constructor(private _dataService: DataService, private _router:Router) { 
    this.user = {name: ''},
    this.allusers = []
  }

  checkSession(){
    this._dataService.checkSession((data)=>{
      this.user = data.user
      if(!this.user){
        this._router.navigate(['/'])
      }
    })
  }

  showUsers(){
    this._dataService.showUsers(this.allusers, (data)=>{
      this.allusers = data
      //console.log(this.allusers)
    })
  }



  ngOnInit() {
    this.showUsers();
  }

}
