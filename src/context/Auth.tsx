import {createContext, Dispatch, useContext, useReducer} from "react";

export enum AuthActionKind {
    ADD = 'ADD',
    CLEAR = 'CLEAR',
}

interface AuthAction {
    type: AuthActionKind;
    payload: AuthState;
}

interface AuthState {
    id: string,
    username: string,
    token: string,
}


const AuthContext = createContext<AuthState | null>(null);

const AuthDispatchContext = createContext<Dispatch<AuthAction | null>>(null);


export function useAuth() {
    return useContext(AuthContext);
}

export function useAuthDispatch() {
    return useContext(AuthDispatchContext);
}

export function AuthProvider({ children }: any) {
    const [state, dispatch] = useReducer(
        authReducer,
        null
    );

    return (
        <AuthContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthContext.Provider>
    );
}

function authReducer(state: AuthState | null, action: AuthAction) {
    switch (action.type) {
        case AuthActionKind.ADD: {
            return  {
                id: action.payload.id,
                username: action.payload.username,
                token: action.payload.token,
            };
        }
        case AuthActionKind.CLEAR: {
            return null;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
