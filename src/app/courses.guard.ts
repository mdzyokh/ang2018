import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './core/store/app.state';

@Injectable({
  providedIn: 'root'
})
export class CoursesGuard implements CanActivate {
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
    if (this.isAuthenticated) {
      this.router.navigate(['courses']);
    }
    return !this.isAuthenticated;
  }
}