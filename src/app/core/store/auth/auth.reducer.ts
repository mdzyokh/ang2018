import { AuthActionTypes, AuthActions } from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';
import { User } from '../../../core/models/user.model';

export function authReducer(state = initialAuthState, action: AuthActions): AuthState {
    switch (action.type) {
        case AuthActionTypes.LOG_IN: {
            return { ...state, loading: true };
        }
        case AuthActionTypes.LOG_IN_COMPLETE: {
            const user = action.payload;
            return {
                ...state,
                user,
                isAuthenticated: true,
                loading: false,
                error: null,
            };
        }
        case AuthActionTypes.LOG_IN_ERROR: {
            const error = action.payload;
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                error
            };
        }
        case AuthActionTypes.LOG_OUT: {
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                error: null
            };
        }
        default:
            return state;
    }
}