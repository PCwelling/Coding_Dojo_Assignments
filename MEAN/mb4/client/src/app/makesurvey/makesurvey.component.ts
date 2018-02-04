import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-makesurvey',
  templateUrl: './makesurvey.component.html',
  styleUrls: ['./makesurvey.component.css']
})
export class MakesurveyComponent implements OnInit {
  username: Object;
  survey: Object;
  

  constructor(private _dataService:DataService, private _router:Router) { 
    this.username = {name: ''};
    this.survey = {question: '', option1: '', option2: '', option3: '', option4: ''};
  }

  checkSession(){
    this._dataService.checkSession((data)=>{
      this.username = data.user
      if(!this.username){
        this._router.navigate(['/'])
      }
    })
  }

  newSurvey(){
    this._dataService.newSurvey(this.survey, (data)=>{
      if(data.survey){
        this._router.navigate(['/home'])
      }
    })
  }

  ngOnInit() {
    this.checkSession();
  }

}
