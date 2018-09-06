import { Component } from '@angular/core';
import * as authActions from '../../core/store/auth/auth.actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  public login = '';
  public pass = '';

  public isAuthenticated$: Observable<boolean>;
  public loginError: boolean = false;

  constructor(private router: Router,
    private store: Store<AppState>) {
    this.isAuthenticated$ = this.store
      .select(state => state.auth.isAuthenticated);
    this.isAuthenticated$.subscribe((isAuth) => {
      if (isAuth) {
        this.router.navigate(['/courses'])
      }
    });
    this.store
      .select(state => state.auth.error).subscribe((err) => {
        this.loginError = err !== null;
      });

  }

  onSubmit() {
    this.loginError = false;
    this.store.dispatch(new authActions.LogIn({
      login: this.login,
      password: this.pass
    }));
  }
}