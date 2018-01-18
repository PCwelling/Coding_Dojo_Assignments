import { Component } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
  title = "Registration";
  users = [];
  user = new User();

  onSubmit(){
    this.users.push(this.user);
    this.user = new User();
  }
}
