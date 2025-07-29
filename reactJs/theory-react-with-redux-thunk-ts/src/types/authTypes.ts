import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILTURE
} from "../constant/appConstant";
export interface AuthState {
    loading: boolean;
    isAuthenticated: boolean;
    error: string | null;
}

interface LoginRequestAction {
    type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
}

interface LoginFailtureAction {
    type: typeof LOGIN_FAILTURE;
    payload: string;
}

export type AuthActionTypes = | LoginRequestAction | LoginFailtureAction | LoginSuccessAction