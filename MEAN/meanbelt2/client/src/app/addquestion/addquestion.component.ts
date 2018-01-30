import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  username: object;
  trivia: object;


  constructor(private _dataService:DataService, private _router:Router) { 
    this.username = {name: ''};
    this.trivia = {question: '', correct: '', fake1: '', fake2: ''};
  }

  checkSession(){
    this._dataService.checkSession((data)=>{
      this.username = data.user
      if(!this.username){
        this._router.navigate(['/'])  
      }
    })
  }


  newQuestion(){
    this._dataService.newQuestion(this.trivia, (data)=>{
      if(data.trivia){
        this._router.navigate(['/home'])
      }
    })
  }

  ngOnInit() {
  }
}
