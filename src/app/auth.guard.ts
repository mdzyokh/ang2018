import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isAuthenticated = false;

  constructor(private authService: AuthService,
    private router: Router) {
    this.authService.isAuthenticated().subscribe(
      isAuthenticated => this.isAuthenticated = isAuthenticated
    );
  }

  canActivate(): boolean {
    if (!this.isAuthenticated) {
      this.router.navigate(['auth']);
    }
    return this.isAuthenticated;
  }
}
