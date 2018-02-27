import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  userName: string
  displayedUser: object
  id: string
  userList:object[]=[]
  constructor(private _dataService: DataService, private _router: Router,private route: ActivatedRoute ) { }
  checkbox(id){
    this._dataService.checkbox(id,()=>{
      console.log("checkbox")
    })
  }
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this._dataService.grabFriend(this.id);

    this._dataService.displayUser.subscribe((res)=>{
      this.displayedUser = res
    })

    this._dataService.userList.subscribe((res)=>{
      this.userList = res;
    })
    this.__dataService.grabUserList(this.id);
    this._dataService.taggedList.subscribe((res)=>{
      this.userList.push(res)
      console.log("back in comp", res)
    })
    this._dataService.grabTaggedList(this.id);

    this._dataService.checkSession((userName) => {
      if (userName['user']) {
        this.userName = userName['user']['name'];
      } else {
        this._router.navigate(['/']);
      }
    })
  }
}
