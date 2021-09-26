import { AuthAction, AuthActions, AuthState } from './types';

const initialState: AuthState = {
    isAuth: true
}

export default function authReducer(state =initialState, action: AuthAction): AuthState {
    switch(action.type) {
        case AuthActions.SET_AUTH:
            return {...state, isAuth: action.payload}
        default:
            return state
    }
} 