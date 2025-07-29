import { LOGIN_FAILTURE,LOGIN_REQUEST,LOGIN_SUCCESS } from "../constant/appConstant";
import type { AuthActionTypes, AuthState } from "../types/authTypes";




const initialState: AuthState = {
    loading: false,
    isAuthenticated: false,
    error: null
}

export const authReducer = (
    state = initialState,
    action: AuthActionTypes
): AuthState => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return{...state, loading: true};
        case LOGIN_SUCCESS:
            return {loading: false, isAuthenticated: true, error: null}
        case LOGIN_FAILTURE:
            return {loading: true, isAuthenticated: false, error: null}
        default:
            return state;
    }
};