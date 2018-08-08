import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public user: User = null;

  constructor(private router: Router, public authService: AuthService) { 
    this.authService.getUserInfo().subscribe((user) => {
      this.user = user;
    });
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
