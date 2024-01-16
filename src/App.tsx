import {Outlet, Link} from "react-router-dom"
import {AuthActionKind, useAuth, useAuthDispatch} from "./context/Auth";
import React from "react";
import {Button} from "./components/ui/button";

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
            <div>
                <Button asChild variant="link"><Link to={``}>home</Link></Button>
                <Button asChild variant="link"><Link to={`private`}>private</Link></Button>
                <Button asChild variant="link"><Link to={`public`}>public</Link></Button>
                {
                    auth && <Button onClick={handleClick}>LogOut</Button>
                }
            </div>
            <Outlet/>
        </>
    )
};
