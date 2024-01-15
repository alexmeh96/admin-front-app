import {Outlet, Link} from "react-router-dom"
import "./App.css"
import "./App2.scss"
import {AuthActionKind, useAuth, useAuthDispatch} from "./context/Auth";
import React from "react";

export const App = () => {
    const dispatch = useAuthDispatch();
    const auth = useAuth();

    function handleClick() {
        dispatch({
            type:  AuthActionKind.CLEAR,
            payload: null
        })
    }
    return (
        <>
            <div>app</div>
            <Link to={``}>home</Link>
            <Link to={`private`}>private</Link>
            <Link to={`public`}>public</Link>
            {
                auth && <button onClick={handleClick}>LogOut</button>
            }
            <Outlet/>
        </>
    )
};
