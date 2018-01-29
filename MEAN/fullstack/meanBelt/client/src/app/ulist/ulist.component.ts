import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-ulist',
  templateUrl: './ulist.component.html',
  styleUrls: ['./ulist.component.css']
})
export class UlistComponent implements OnInit {
  username: object;

  constructor(private _dataService:DataService, private _router:Router, private _route:ActivatedRoute) {
    this.username = {name: ''};
  }

  ngOnInit() {
  }

}
