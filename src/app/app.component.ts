import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './core/store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isAuthenticated = false;
  public isLoading$: Observable<boolean>;

  constructor(private authService: AuthService,
    private coursesStore: Store<AppState>) {
    this.authService.isAuthenticated().subscribe(
      isAuthenticated => this.isAuthenticated = isAuthenticated
    );
    this.isLoading$  = this.coursesStore
    .select(state => state.courses.loading);
  }
}
