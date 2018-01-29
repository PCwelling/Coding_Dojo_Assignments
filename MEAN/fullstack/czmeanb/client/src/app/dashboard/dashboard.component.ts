import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  errorMsg: string = ""
  userName: string
  allQuestions : object[] = []
  constructor(private _mainService: MainService, private _router: Router) {
    this._mainService.allQuestions.subscribe((allQuestions) => {
      this.allQuestions = allQuestions;
    })
    this._mainService.GrabAllQuestions();
  }

  ngOnInit() {
    this._mainService.CheckSession((userName) => {
      if (userName['user']) {
        this.userName = userName['user'];
      } else {
        this._router.navigate(['/']);
      }
    })
  }

}
