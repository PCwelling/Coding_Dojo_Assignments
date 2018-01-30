import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playgame',
  templateUrl: './playgame.component.html',
  styleUrls: ['./playgame.component.css']
})
export class PlaygameComponent implements OnInit {
  username: object;
  game: object;


  constructor(private _dataService:DataService, private _router:Router) {
    this.username = {name: ''};
    this.game = {question1: '', questtion2: '', question3: '', _id: null};
   }

  checkSession(){
    this._dataService.checkSession((data)=>{
      this.username = data.user
      if(!this.username){
        this._router.navigate(['/'])
      }
    })
  }


  newGame(){
    this._dataService.newGame((data)=>{
      console.log("returned data",data)
      this.game = data
    })
  }

  
  ngOnInit() {
    this.checkSession();
    this.newGame();
  }
}