import React from 'react';
import {Button} from "../../components/ui/button";
import {testServerGet, testServerPost} from "../../service/auth/auth";

const HomePage = () => {


    async function click1 () {
        await testServerGet()
    }

    async function click2 () {
        await testServerPost()
    }


    return (
        <div>
            <div>Здарова, это админка на реакте!</div>
            <div>Кнопка попрежнему ничего не делает, гы</div>
            <Button onClick={click1}>testServerGet</Button>
            <Button onClick={click2}>testServerPost</Button>
        </div>
    );
}

export default HomePage;
