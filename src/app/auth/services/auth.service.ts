import { Injectable } from '@angular/core';
import { User } from '../../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: User;

  constructor() { }

  login(login: string, password: string): User {
    this.currentUser = new User(1, "John", "Smith", login, password);
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    return this.currentUser;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    if (!this.currentUser) {
      this.currentUser = this.getUserFromStorage();
      return !!this.currentUser;
    }
    return true;
  }

  getUserInfo(): User {
    if (!this.currentUser) {
      this.currentUser = this.getUserFromStorage();
    }
    return this.currentUser;
  }

  getUserFromStorage(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}