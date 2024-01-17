import {LOGIN_API, REFRESH_TOKEN_API} from "../api/firebase";
import {signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "../../firebase";

export async function testServerGet() {
    try {
        const data = await fetch("https://89.23.112.3:8081/hello", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })

        let text = await data.text();

        console.log(data, 'eee2')
        console.log(text, 'eee3')
    } catch (err) {
        throw err
    }
}

export async function testServerPost() {
    try {
        const data = await fetch("https://89.23.112.3:8081", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id": "123",
                "name": "book1"
            })
        })

        let json = await data.json();

        console.log(data, 'eee2')
        console.log(json, 'eee3')
    } catch (err) {
        throw err
    }
}


export async function login(email: string, password: string) {

    try {
        const data = await fetch(LOGIN_API, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                clientType: "CLIENT_TYPE_WEB",
                returnSecureToken: true
            }),
        })

        let json = await data.json();
        console.log(json, 'eee2')

    } catch (err) {
        throw err
    }

}

export async function loginSdk(email: string, password: string) {

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential, 'qqq2')
    } catch (err) {
        throw err
    }

}

export async function updateToken(refreshToken: string) {
    try {
        const data = await fetch(REFRESH_TOKEN_API, {
            method: "POST",
            body: JSON.stringify({
                grant_type: "refresh_token",
                refresh_token: refreshToken,
            }),
        })

        let json = await data.json();

        console.log(json, 'eee2')
    } catch (err) {
        throw err
    }
}
