import { AuthActionTypes, AuthActions } from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';
import { User } from '../../../core/models/user.model';

export function authReducer(state = initialAuthState, action: AuthActions): AuthState {
    switch (action.type) {
        case AuthActionTypes.LOG_IN: {
            return { ...state, loading: true };
        }
        case AuthActionTypes.LOG_IN_COMPLETE: {
            return {
                ...state,
                loading: false
            };
        }
        case AuthActionTypes.LOG_IN_ERROR: {
            const error = action.payload;
            return {
                ...state,
                loading: false,
                error
            };
        }
        case AuthActionTypes.LOG_OUT: {
            return { ...state, loading: true };
        }
        case AuthActionTypes.GET_USER_INFO: {
            return { ...state, loading: true };
        }
        case AuthActionTypes.GET_USER_COMPLETE: {
            const user = <User>action.payload;
            return {
                ...state,
                user,
                loading: false
            };
        }
        case AuthActionTypes.GET_USER_ERROR: {
            const error = action.payload;
            return {
                ...state,
                loading: false,
                error
            };
        }
        default:
            return state;
    }
}