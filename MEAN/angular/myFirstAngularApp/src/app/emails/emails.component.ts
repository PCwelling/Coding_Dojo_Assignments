import { Component, OnInit } from '@angular/core';
import {Emails} from './../emails';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {
  emails: Array<object>
  constructor() {
    this.emails = []
    this.emails.push(new Emails("New Windows", false, "bill@gates.com", "Windows XI will launch in the year 2100."))
    this.emails.push(new Emails("Programming", false, "ada@lovelace.com", "Enchantress of Numbers"))
    this.emails.push(new Emails("Update Algo", true, "john@carmac.com", "New algorithim for shadow volumes"))
    this.emails.push(new Emails("HL3!", true, "gabe@newel.com", "Just kidding..."))
  }

  ngOnInit() {
  }

}
