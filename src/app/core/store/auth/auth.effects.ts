import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '../../../core/models/user.model';
import { AuthService } from '../../../auth/services/auth.service';

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions,
        private authService: AuthService) { }

    @Effect()
    logIn$: Observable<Action> = this.actions$.pipe(
        ofType(AuthActions.AuthActionTypes.LOG_IN),
        switchMap((action: any) => {
            return this.authService.login(action.payload.login, action.payload.password).toPromise()
                .then((data: User) => {
                    return data ? new AuthActions.LogInComplete(data) : new AuthActions.LogInError('Login failed');
                })
                .catch(error => new AuthActions.LogInError(error));
        })
    );
}