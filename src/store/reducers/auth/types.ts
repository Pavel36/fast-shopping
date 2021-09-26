export interface AuthState {
    isAuth: boolean;
}

export enum AuthActions {
    SET_AUTH = "SET_AUTH"
}

export interface SetAuthAction {
    type: AuthActions.SET_AUTH;
    payload: boolean;
}

export type AuthAction = 
    SetAuthAction