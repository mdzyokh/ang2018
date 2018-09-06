import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from './core/store/app.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public isAuthenticated$: Observable<boolean>;
  private isAuthenticated = false;

  constructor(private store: Store<AppState>,
    private router: Router) {
    this.isAuthenticated$ = this.store
      .select(state => state.auth.isAuthenticated);
    this.isAuthenticated$.subscribe((isAuth) => {
      this.isAuthenticated = isAuth;
    });
  }

  canActivate(): boolean {
    if (!this.isAuthenticated) {
      this.router.navigate(['auth']);
    }
    return this.isAuthenticated;
  }
}
