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
  allpolls: Array<any>

  constructor(private _dataService:DataService, private _router:Router) { 

    this.username = {name: ''};
    this.allpolls = []

  }

  checkSession(){
    this._dataService.checkSession((data)=>{
      this.username = data.user
      if(!this.username){
        this._router.navigate(['/'])
      }
    })
  }
  
  allPolls(){
    this._dataService.allPolls(this.allpolls, (data)=>{
      this.allpolls = data
    })
  }
  deletePoll(id){
    this._dataService.deletePoll(id, ()=>{
        for(let poll in this.allpolls){
          if(id == this.allpolls[poll]._id){
            this.allpolls.splice(parseInt(poll))
          }
        }
    })
  }



  ngOnInit() {
    this.checkSession();
    this.allPolls();

  }

}
