import React, {useState} from "react";
import './App.css';
import {Counter} from "./components/ui/counter/Counter";
import {Settings} from "./components/ui/settings/Settings";


function App() {
    const [theme, setTheme] = useState<string | null>('dark');

    const clickHandler = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
    }

    const appStyle = 'app ' + theme

    return (
        <>
            <div className={appStyle}>
                <Settings/>
                <Counter/>
            </div>
            <input type='checkbox' id='toggle' className={'toggle-checkbox'}/>
            <label htmlFor='toggle' className={'toggle-label'} onClick={clickHandler}>
                <span className={'toggle-label-background'}></span>
            </label>
        </>

    )
}

export default App;
