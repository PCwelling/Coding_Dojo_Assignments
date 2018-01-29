import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: object;
  list: object;
  allusers: Array<any>;
  allitems: Array<any>;


  constructor(private _dataService:DataService, private _router:Router) { 
    this.username = {name: ''};
    this.list = {title: '',  desc: '', tagged: '', _poster: ''};
    this.allusers = [];
    this.allitems = [];
    
  }

  checkSession(){
    this._dataService.checkSession((data)=>{
      this.username = data.user
      if(!this.username){
        this._router.navigate(['/'])
      }
    })
  }

  newItem(){
    this._dataService.newItem(this.list, (data)=>{
      this.allitems.push(data.list)
    })
  }

  showUsers(){
    this._dataService.showUsers(this.allusers, (data)=>{
      this.allusers = data
    })
  }

  showItems(){
    this._dataService.showItems(this.allitems, (data)=>{
      this.allitems = data
    })
  }


  ngOnInit() {
    this.checkSession();
    this.showUsers();
    this.showItems();
  }

}








