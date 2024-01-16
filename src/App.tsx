import {Outlet, Link} from "react-router-dom"
import {AuthActionKind, useAuth, useAuthDispatch} from "./context/Auth";
import React from "react";

export const App = () => {
    const dispatch = useAuthDispatch();
    const auth = useAuth();

    function handleClick() {
        dispatch({
            type: AuthActionKind.CLEAR,
            payload: null
        })
    }

    return (
        <>
            <div><Link to={``}>home</Link></div>
            <div><Link to={`private`}>private</Link></div>
            <div><Link to={`public`}>public</Link></div>
            {
                auth && <div>
                    <button onClick={handleClick}>LogOut</button>
                </div>
            }
            <Outlet/>
        </>
    )
};
