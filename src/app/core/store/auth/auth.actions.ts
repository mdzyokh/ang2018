import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum AuthActionTypes {
    LOG_IN = '[AUTH] LOG_IN',
    LOG_IN_COMPLETE = '[AUTH] LOG_IN_COMPLETE',
    LOG_IN_ERROR = '[AUTH] LOG_IN_ERROR',
    LOG_OUT = '[AUTH] LOG_OUT',
    LOG_OUT_COMPLETE = '[AUTH] LOG_OUT_COMPLETE',
    LOG_OUT_ERROR = '[AUTH] LOG_OUT_ERROR',
    GET_USER_INFO = '[AUTH] GET_USER_INFO',
    GET_USER_COMPLETE = '[AUTH] GET_USER_COMPLETE',
    GET_USER_ERROR = '[AUTH] GET_USER_INFO_ERROR'
}

export class LogIn implements Action {
    readonly type = AuthActionTypes.LOG_IN;
    constructor(login: string, password: string) { }
}

export class LogInComplete implements Action {
    readonly type = AuthActionTypes.LOG_IN_COMPLETE;
}

export class LogInError implements Action {
    readonly type = AuthActionTypes.LOG_IN_ERROR;
    constructor(public payload: Error | string) { }
}

export class LogOut implements Action {
    readonly type = AuthActionTypes.LOG_OUT;
}

export class LogOutComplete implements Action {
    readonly type = AuthActionTypes.LOG_OUT_COMPLETE;
}

export class LogOutError implements Action {
    readonly type = AuthActionTypes.LOG_OUT_ERROR;
    constructor(public payload: Error | string) { }
}

export class GetUserInfo implements Action {
    readonly type = AuthActionTypes.GET_USER_INFO;
}

export class GetUserInfoComplete implements Action {
    readonly type = AuthActionTypes.GET_USER_COMPLETE;
    constructor(public payload: User) { }
}

export class GetUserInfoError implements Action {
    readonly type = AuthActionTypes.GET_USER_ERROR;
    constructor(public payload: Error | string) { }
}

export type AuthActions =
    LogIn
    | LogInComplete
    | LogInError
    | LogOut
    | LogOutComplete
    | LogOutError
    | GetUserInfo
    | GetUserInfoComplete
    | GetUserInfoError;