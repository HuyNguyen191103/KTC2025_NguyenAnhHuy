import {
    legacy_createStore as createStore,
    applyMiddleware,
} from "redux"
import {thunk, thunk as thunkMiddleware} from "redux-thunk"
import type { ThunkMiddleware } from "redux-thunk"
import type {AuthActionTypes} from "../types/authTypes"
import { rootReducer } from "../reducers/rootReducer"

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore (
    rootReducer,
    undefined,
    applyMiddleware(
        thunk as ThunkMiddleware<RootState, AuthActionTypes>
    )
);
