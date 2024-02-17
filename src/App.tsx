import React from "react";
import './App.css';
import {Counter} from "./components/ui/counter/Counter";
import {Settings} from "./components/ui/settings/Settings";


function App() {
    return (
        <>
            <div className="app">
                <Settings/>
                <Counter/>
            </div>
            <button className={'themeButton'}></button>
        </>
    )
}

export default App;
