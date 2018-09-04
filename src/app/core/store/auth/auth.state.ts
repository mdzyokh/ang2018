import { User } from "../../models/user.model";

export interface AuthState {
    user: User;
    isAuthenticated: boolean;
    loading: boolean;
    error: Error | string;
}

export const initialAuthState: AuthState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
};