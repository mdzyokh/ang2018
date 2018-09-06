import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  public login = '';
  public pass = '';

  constructor(private router: Router,
    private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.login, this.pass)
      .subscribe(isLoggedIn => {
        if (isLoggedIn) {
          this.router.navigate(['/courses'])
        }
      });
  }

}