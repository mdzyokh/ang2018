import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input() currentUser: User;
  @Output() logout = new EventEmitter<any>();

  constructor() { }

  public logoutHandler(): void {
    this.logout.emit();
  }
}
