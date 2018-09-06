import { Component } from '@angular/core';
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
  public isAuthenticated$: Observable<boolean>;
  public isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store
      .select(state => state.courses.loading);
    this.isAuthenticated$ = this.store
      .select(state => state.auth.isAuthenticated);
  }
}
