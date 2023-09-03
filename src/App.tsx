import React, {useEffect, useState} from "react";
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";
import {useDispatch, useSelector} from "react-redux";
import {
    incrementValueAC,
    setErrorAC,
    setMaxValueAC,
    setResetCounterAC,
    setStartValueAC
} from "./state/counter-reducer";
import {AppStateType} from "./state/store";


function App() {
    const maxValue = useSelector<AppStateType, number>(state => state.app.maxValue);
    const startValue = useSelector<AppStateType, number>(state => state.app.startValue);
    const counter = useSelector<AppStateType, number>(state => state.app.counter);


    const dispatch = useDispatch();

    let [btnSetDisabled, setBtnSetDisabled] = useState<boolean>(false);


    // useEffect(() => {
    //     let maxValueString = localStorage.getItem("maxValue");
    //     let startValueString = localStorage.getItem("startValue");
    //     let counterValueString = localStorage.getItem("counterValue");
    //     if (maxValueString && startValueString && counterValueString) {
    //         setMaxValue(JSON.parse(maxValueString));
    //         setStartValue(JSON.parse(startValueString));
    //         setCounter(JSON.parse(counterValueString));
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem("counterValue", JSON.stringify(counter))
    // }, [counter])




    const increment = () => {
            dispatch(incrementValueAC());
    }

    const reset = () => {
        dispatch(setResetCounterAC());
    }

    const handleCorrectValueCondition = () => {
        setBtnSetDisabled(false);
        dispatch(setErrorAC("Enter values and press 'SET'"));

    }

    const handleIncorrectValueCondition = () => {
        setBtnSetDisabled(true);
        dispatch(setErrorAC('Incorrect value'));
    }


    let maxValueIncorrectCases = maxValue <= 0
        || maxValue < startValue
        || maxValue === startValue


    let startValueIncorrectCases = startValue < 0
        || startValue > maxValue
        || startValue === maxValue



    const maxValueSet = (maxNum: number) => {
        if (!maxValueIncorrectCases && maxNum.toString().length < 9) {
            dispatch(setMaxValueAC(maxNum));
            handleCorrectValueCondition();
            localStorage.setItem('maxValue', JSON.stringify(maxNum))
        } else {
            dispatch(setMaxValueAC(maxNum));
            handleIncorrectValueCondition();
        }
        dispatch(setMaxValueAC(maxNum));
    }

    const startValueSet = (startNum: number) => {
        if (!startValueIncorrectCases && startNum.toString().length < 9) {
            dispatch(setStartValueAC(startNum));
            handleCorrectValueCondition();
            localStorage.setItem("startValue", JSON.stringify(startNum))
        } else {
            dispatch(setStartValueAC(startNum));
            handleIncorrectValueCondition();
        }
    }


    const setCounterValue = () => {
        dispatch(setResetCounterAC());
        setBtnSetDisabled(true);
        dispatch(setErrorAC(null));
    }





    return (
        <div className='App'>
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                maxValueSet={maxValueSet}
                startValueSet={startValueSet}
                setCounterValue={setCounterValue}
                maxValueIncorrectCases={maxValueIncorrectCases}
                startValueIncorrectCases={startValueIncorrectCases}
                btnSetDisabled={btnSetDisabled}
            />

            <Counter
                startValue={startValue}
                maxValue={maxValue}
                counter={counter}
                increment={increment}
                reset={reset}
            />
        </div>
    )
}

export default App;
