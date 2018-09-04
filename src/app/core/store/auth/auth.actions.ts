import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum AuthActionTypes {
    LOG_IN = '[AUTH] LOG_IN',
    LOG_IN_COMPLETE = '[AUTH] LOG_IN_COMPLETE',
    LOG_IN_ERROR = '[AUTH] LOG_IN_ERROR',
    LOG_OUT = '[AUTH] LOG_OUT',
    GET_USER_INFO = '[AUTH] GET_USER_INFO',
    GET_USER_COMPLETE = '[AUTH] GET_USER_COMPLETE',
    GET_USER_ERROR = '[AUTH] GET_USER_INFO_ERROR'
}

export class LogIn implements Action {
    readonly type = AuthActionTypes.LOG_IN;
    constructor(public payload: any) { }
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
    | GetUserInfo
    | GetUserInfoComplete
    | GetUserInfoError;