import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Object;

  constructor(private _dataService: DataService, private _router:Router ) {
    this.user = {name: ''}
   }

  login(){
    this._dataService.login(this.user, (data)=>{
      if(data.user){
        this._router.navigate(['/home'])
      }
    })
  }


  ngOnInit() {
  }

}
