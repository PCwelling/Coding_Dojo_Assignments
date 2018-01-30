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
  trivia: object;
  constructor(private _dataService:DataService, private _router:Router) {
    this.username = {name: ''};
    this.trivia = {question: '', correctanswer: '', fakeanswer1: '', fakeanswer2: ''}

   }


  checkSession(){
    this._dataService.checkSession((data)=>{
      this.username = data.user
      if(!this.username){
        this._router.navigate(['/'])
      }
    })
  }

addQuestion(){
  this._router.navigate(['/addquestion'])
}


  playGame(){
    this._router.navigate(['/playgame'])
  }

  //// Last Section ////
  ngOnInit() {
    this.checkSession();
  }
}
