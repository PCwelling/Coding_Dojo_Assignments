import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  question: object = { question: "", description: "" }
  errorMsg: string = ""
  userName: string
  constructor(private _mainService: MainService, private _router: Router) { }
  AddQuestion() {
    this.question['question'] = this.question['question'].trim();
    this.question['description'] = this.question['description'].trim();
    if (this.question['question'].length >= 10) {
      this.errorMsg = "";
      this._mainService.AddQuestion(this.question, (res) => {
        // console.log(res)
        this._router.navigate(['dashboard']);
      })
    } else {
      this.errorMsg = "Question must be at least 10 characters.";
    }
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
