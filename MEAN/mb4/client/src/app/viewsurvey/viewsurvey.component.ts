import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Identifiers } from '@angular/compiler/src/identifiers';


@Component({
  selector: 'app-viewsurvey',
  templateUrl: './viewsurvey.component.html',
  styleUrls: ['./viewsurvey.component.css']
})
export class ViewsurveyComponent implements OnInit {

  username: Object;
  poll: Object;
  allpolls: Array<any>
  id: any

  constructor(private _dataService:DataService, private _router:Router, private _route:ActivatedRoute) { 
    this.username = {name: ''};
    this.poll = {question: '', option1: '', option2: '', option3:'', option4: '', 
                  optionlike1: 0, optionlike2: 0, optionlike3: 0, optionlike4: 0}
    this.allpolls = []
    this._route.paramMap.subscribe(params =>{
      this.id = (params.get('id'))
    })
  }

  checkSession(){
    this._dataService.checkSession((data)=>{
      this.username = data.user
      if(!this.username){
        this._router.navigate(['/'])
      }
    })
  }

  showPoll(id){
    this._dataService.showPoll(id, (data)=>{
      this.poll =data
    })
  }

  ngOnInit() {
    this.checkSession();
    this.showPoll(this.id);

  }

}
