import { User } from "../../models/user.model";

export interface AuthState {
    readonly user: User;
    readonly loggedIn: boolean;
    readonly loading: boolean;
    readonly error: Error | string;
}

export const initialAuthState: AuthState = {
    user: null,
    loggedIn: false,
    loading: false,
    error: null
  };