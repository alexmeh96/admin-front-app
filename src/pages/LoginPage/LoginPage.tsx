import React from 'react';
import {AuthActionKind, useAuthDispatch} from "../../context/Auth";
import {Link} from "react-router-dom";

interface Props {

}

const LoginPage = (props: Props) => {
    const dispatch = useAuthDispatch();

    function handleClick() {
        dispatch({
            type:  AuthActionKind.ADD,
            payload: {
                id: "1",
                username: "alex",
                token: "token"
            }
        })
    }

    return (
        <>
            <div>LoginPage</div>
            <button onClick={handleClick}>LogIn</button>
        </>
    );
}

export default LoginPage;
