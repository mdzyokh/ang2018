import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../core/models/user.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

const API_URL = "http://localhost:3004/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private fakeToken: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<User> {
    const url = `${API_URL}users`;
    return this.http.get<User[]>(url, { params: { login, password } })
      .pipe(map((users) => {
        if (!users.length) {
          return null;
        }
        const user = users[0];
        const { fakeToken } = user;
        this.fakeToken.next(fakeToken);
        return user;
      }));
  }

  logout(): Observable<void> {
    return of(this.fakeToken.next(null));
  }

  getUserInfo(): Observable<User> {
    return this.fakeToken.pipe(flatMap(
      fakeToken =>
        this.http.get<User>(`${API_URL}users`, { params: { fakeToken } })
          .pipe(map(
            users => users[0]
          ))
    ));
  }

  getUserFromStorage(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  getToken() {
    return localStorage.getItem('token');
  }
}