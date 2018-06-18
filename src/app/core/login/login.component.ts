import { Component, OnInit } from '@angular/core';

import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public currentUser: User;

  constructor() { }

  ngOnInit() {
    this.currentUser = new User(1, "John", "Smith");
  }

}
