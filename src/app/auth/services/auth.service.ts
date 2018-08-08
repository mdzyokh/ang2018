import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../../core/models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

const API_URL = "http://localhost:3004/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private fakeToken: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<boolean> {
    const url = `${API_URL}users`;
    return this.http.get<User[]>(url, { params: { login, password } })
      .pipe(map((users) => {
        if (!users.length) {
          return false;
        }
        const { fakeToken } = users[0];
        this.fakeToken.next(fakeToken);
        return true;
      }));
  }

  logout() {
    return this.fakeToken.next(null);
  }

  isAuthenticated(): Observable<boolean> {
    return this.fakeToken.pipe(
      map(
        fakeToken => fakeToken !== null
      )
    );
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