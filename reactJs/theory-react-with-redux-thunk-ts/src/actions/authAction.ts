import type { AuthActionTypes} from "../types/authTypes"
import type { Dispatch } from "redux";
import { LOGIN_FAILTURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constant/appConstant";



export const login = (email: string, password: string) => {
    return (dispatch: Dispatch<AuthActionTypes>) => {
        dispatch({type: LOGIN_REQUEST});

        setTimeout(() => {
            if (email === "admin@gmail.com" && password === "1234") {
                dispatch({type: LOGIN_SUCCESS});
            } else {
                dispatch({type: LOGIN_FAILTURE, payload: "Invalid"});
            }
        }, 1000);
    }
}