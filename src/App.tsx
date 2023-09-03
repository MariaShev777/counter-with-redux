import React, {useEffect, useState} from "react";
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";


function App() {

    let [maxValue, setMaxValue] = useState<number>(5);
    let [startValue, setStartValue] = useState<number>(0);
    let [counter, setCounter] = useState<number | null>(startValue);

    let [btnSetDisabled, setBtnSetDisabled] = useState<boolean>(false);

    let [errorText, setErrorText] = useState<string | null>(null);


    useEffect(() => {
        let maxValueString = localStorage.getItem("maxValue");
        let startValueString = localStorage.getItem("startValue");
        let counterValueString = localStorage.getItem("counterValue");
        if (maxValueString && startValueString && counterValueString) {
            setMaxValue(JSON.parse(maxValueString));
            setStartValue(JSON.parse(startValueString));
            setCounter(JSON.parse(counterValueString));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(counter))
    }, [counter])

    let maxValueIncorrectCases = maxValue <= 0
        || maxValue < startValue
        || maxValue === startValue


    let startValueIncorrectCases = startValue < 0
        || startValue > maxValue
        || startValue === maxValue


    const increment = () => {
        if (counter && counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const reset = () => {
        setCounter(startValue)
    }

    const handleCorrectValueCondition = () => {
        setBtnSetDisabled(false);
        setErrorText("Enter values and press 'SET'");
    }

    const handleIncorrectValueCondition = () => {
        setBtnSetDisabled(true);
        setErrorText("Incorrect value");
    }


    const maxValueSet = (maxNum: number) => {
        if (!maxValueIncorrectCases && maxNum.toString().length < 9) {
            setMaxValue(maxNum)
            handleCorrectValueCondition();
            localStorage.setItem('maxValue', JSON.stringify(maxNum))
        } else {
            setMaxValue(maxNum);
            handleIncorrectValueCondition();
        }
    }

    const startValueSet = (startNum: number) => {
        if (!startValueIncorrectCases && startNum.toString().length < 9) {
            setStartValue(startNum);
            handleCorrectValueCondition();
            localStorage.setItem('startValue', JSON.stringify(startNum))
        } else {
            setStartValue(startNum);
            handleIncorrectValueCondition();
        }
    }

    const setCounterValue = () => {
        setCounter(startValue)
        setBtnSetDisabled(true)
        setErrorText(null);
    }





    return (
        <div className='App'>
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                maxValueSet={maxValueSet}
                startValueSet={startValueSet}
                setCounterValue={setCounterValue}
                btnSetDisabled={btnSetDisabled}
                maxValueIncorrectCases={maxValueIncorrectCases}
                startValueIncorrectCases={startValueIncorrectCases}
            />

            <Counter startValue={startValue}
                     maxValue={maxValue}
                     increment={increment}
                     reset={reset}
                     counter={counter}
                     errorText={errorText}/>
        </div>
    )
}

export default App;
