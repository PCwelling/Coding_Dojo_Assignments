import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: Object;
  params: Object;
  profile: Object;

  constructor(private _dataService:DataService, private _router:Router, private _route:ActivatedRoute) { 

    this.username = {name: ''};
    this.profile ={name: ''};
    this._route.paramMap.subscribe(params => {
      //console.log(params)
      //console.log(params.get('id'))
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

  showProfile(params){
    this._dataService.showProfile(params, (data)=>{
      this.profile = data
    })
  }

  ngOnInit() {
    this.checkSession();
  }

}
