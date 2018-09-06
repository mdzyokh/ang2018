import { Component } from '@angular/core';
import * as authActions from '../../core/store/auth/auth.actions';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public user$: Observable<User>;
  public user: User = null;

  constructor(private router: Router,
    private store: Store<AppState>) {
    this.user$ = this.store
      .select(state => state.auth.user);
  }

  onLogout(): void {
    this.store.dispatch(new authActions.LogOut());
    this.router.navigate(['/auth']);
  }
}
