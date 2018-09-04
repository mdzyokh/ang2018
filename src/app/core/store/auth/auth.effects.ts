import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AppState } from '../app.state';
import { User } from '../../../core/models/user.model';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions,
        private authService: AuthService) {}

    @Effect()
    logIn$: Observable<Action> = this.actions$.pipe(
        ofType(AuthActions.AuthActionTypes.LOG_IN),
        switchMap((action: any) => {
            return this.authService.login(action.payload.login, action.password).toPromise()
                .then((data: boolean) => {
                    return data ? new AuthActions.LogInComplete() : new AuthActions.LogInError('Login failed');
                })
                .catch(error => new AuthActions.LogInError(error));
        })
    );

    // @Effect()
    // logOut$: Observable<Action> = this.actions$.pipe(
    //     ofType(AuthActions.AuthActionTypes.LOG_OUT),
    //     switchMap((action: any) => {
    //         return this.authService.logout().toPromise()
    //             .then(() => {
    //                 return new AuthActions.LogOutComplete();
    //             })
    //             .catch(error => new AuthActions.LogOutError(error));
    //     })
    // );

    @Effect()
    getUserInfo$: Observable<Action> = this.actions$.pipe(
        ofType(AuthActions.AuthActionTypes.GET_USER_INFO),
        switchMap((action: any) => {
            return this.authService.getUserInfo().toPromise()
                .then((data: User) => {
                    return new AuthActions.GetUserInfoComplete(action.payload);
                })
                .catch(error => new AuthActions.GetUserInfoError(error));
        })
    );
}