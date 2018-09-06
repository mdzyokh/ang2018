import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum AuthActionTypes {
    LOG_IN = '[AUTH] LOG_IN',
    LOG_IN_COMPLETE = '[AUTH] LOG_IN_COMPLETE',
    LOG_IN_ERROR = '[AUTH] LOG_IN_ERROR',
    LOG_OUT = '[AUTH] LOG_OUT'
}

export class LogIn implements Action {
    readonly type = AuthActionTypes.LOG_IN;
    constructor(public payload: any) { }
}

export class LogInComplete implements Action {
    readonly type = AuthActionTypes.LOG_IN_COMPLETE;
    constructor(public payload: any) { }
}

export class LogInError implements Action {
    readonly type = AuthActionTypes.LOG_IN_ERROR;
    constructor(public payload: Error | string) { }
}

export class LogOut implements Action {
    readonly type = AuthActionTypes.LOG_OUT;
}

export type AuthActions =
    LogIn
    | LogInComplete
    | LogInError
    | LogOut;