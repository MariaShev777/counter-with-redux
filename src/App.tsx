import React, {useEffect, useState} from "react";
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";
import {useDispatch, useSelector} from "react-redux";
import {setError, setMaxValue, setResetCounter, setStartValue} from "./state/counter-reducer";
import {AppStateType} from "./state/store";


function App() {
    const maxValue = useSelector<AppStateType, number>(state => state.app.maxValue);
    const startValue = useSelector<AppStateType, number>(state => state.app.startValue);

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



    const handleCorrectValues = () => {
        setBtnSetDisabled(false);
        dispatch(setError("Enter values and press 'SET'"));

    }

    const handleIncorrectValues = () => {
        dispatch(setError('Incorrect value'));
        setBtnSetDisabled(true);

    }


    const maxValueCorrectCases = maxValue > 0
        && maxValue > startValue
        // || maxValue !== startValue



    const startValueCorrectCases = startValue > 0
        && startValue < maxValue



    const maxValueSet = (maxNum: number) => {
        if (maxValueCorrectCases && maxNum.toString().length < 7) {
            dispatch(setMaxValue(maxNum));
            handleCorrectValues();
            localStorage.setItem('maxValue', JSON.stringify(maxNum))
        } else {
            handleIncorrectValues();
            dispatch(setMaxValue(maxNum));

        }
    }

    const startValueSet = (startNum: number) => {
        if (startValueCorrectCases && startNum.toString().length < 7) {
            dispatch(setStartValue(startNum));
            handleCorrectValues();
            localStorage.setItem("startValue", JSON.stringify(startNum))
        } else {
            dispatch(setStartValue(startNum));
            handleIncorrectValues();
        }
    }


    const setCounterValue = () => {
        dispatch(setResetCounter());
        setBtnSetDisabled(true);
        dispatch(setError(null));
    }







    return (
        <div className='App'>
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                maxValueSet={maxValueSet}
                startValueSet={startValueSet}
                setCounterValue={setCounterValue}
                maxValueCorrectCases={maxValueCorrectCases}
                startValueCorrectCases={startValueCorrectCases}
                btnSetDisabled={btnSetDisabled}
            />

            <Counter
                startValue={startValue}
                maxValue={maxValue}
            />
        </div>
    )
}

export default App;
