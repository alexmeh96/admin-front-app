import React, {useState} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "../../firebase";
import {Button} from "../../components/ui/button";

const HomePage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignUp(e:any) {
        e.preventDefault()

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            console.log(userCredential)
        } catch (error) {
            console.error(error)
        }
    }

    async function handleSignIn(e:any) {
        e.preventDefault()

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential)
        } catch (error) {
            console.error(error)
        }
    }

    async function handleLogout(e:any) {

        try {
            await signOut(auth);
            console.log(auth, 'qqq1')
        } catch (error) {
            console.error(error)
        }
    }

    async function click () {
        // console.log(auth.currentUser)
        // let idTokenResult = await auth.currentUser.getIdTokenResult();
        // console.log(idTokenResult)
    }


    return (
        <div>
            <div>Здарова, это админка на реакте!</div>
            <div>Кнопка попрежнему ничего не делает, гы</div>
            <Button onClick={click}>click</Button>
            {/*<button className="button2">click</button>*/}
            {/*<hr/>*/}
            {/*<form onSubmit={handleSignUp}>*/}
            {/*    <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>*/}
            {/*    <input type="password" placeholder="password" value={password}*/}
            {/*           onChange={e => setPassword(e.target.value)}/>*/}
            {/*    <button type="submit">SignUp</button>*/}
            {/*</form>*/}
            {/*<hr/>*/}
            {/*<form onSubmit={handleSignIn}>*/}
            {/*    <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>*/}
            {/*    <input type="password" placeholder="password" value={password}*/}
            {/*           onChange={e => setPassword(e.target.value)}/>*/}
            {/*    <button type="submit">SignIn</button>*/}
            {/*</form>*/}
            {/*<hr/>*/}
            {/*<button onClick={handleLogout}>Logout</button>*/}
        </div>
    );
}

export default HomePage;
