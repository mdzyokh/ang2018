import { Component} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  public login = '';
  public password = '';

  constructor(private router: Router,
    private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.login, this.password);
    this.router.navigate(['/courses']);
  }

}