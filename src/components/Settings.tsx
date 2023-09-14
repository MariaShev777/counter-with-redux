import React, {useState} from "react";
import {SuperButton} from "./common/SuperButton";
import {SuperInput} from "./common/SuperInput";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../state/store";
import { setError, setMaxValue, setResetCounter, setStartValue} from "../state/counter-reducer";


export const Settings = () => {
    const maxValue = useSelector<AppStateType, number>(state => state.app.maxValue);
    const startValue = useSelector<AppStateType, number>(state => state.app.startValue);

    let [buttonDisabled, setButtonDisabled] = useState(false);


    const dispatch = useDispatch();

    const maxValueCorrectCases = maxValue > 0 && maxValue > startValue;
    const startValueCorrectCases = startValue >= 0 && startValue < maxValue;

    const allCorrectValueCases = maxValueCorrectCases && startValueCorrectCases;


    const maxValueCorrectCasesStyle = maxValueCorrectCases ? "input" : "input-error"
    const startValueCorrectCasesStyle = startValueCorrectCases ? "input" : "input-error"



    const maxValueSet = (maxNum: number) => {
        setButtonDisabled(false);
        dispatch(setMaxValue(maxNum));
        if (maxNum > 0 && maxNum > startValue && startValueCorrectCases)  {
            dispatch(setError("Enter values and press 'SET'"));
        } else {
            setButtonDisabled(true);
            dispatch(setError("Incorrect value"));
        }

    }

    const startValueSet = (startNum: number) => {
        setButtonDisabled(false);
        dispatch(setStartValue(startNum));
        if (startNum >= 0 && startNum < maxValue) {
            dispatch(setError("Enter values and press 'SET'"));
        } else {
            setButtonDisabled(true);
            dispatch(setError("Incorrect value"));
        }
    }

    const setCounterValue = () => {
        allCorrectValueCases &&
        dispatch(setResetCounter());
        dispatch(setError(""));
        setButtonDisabled(true);
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }

    const setClass = `button
    ${allCorrectValueCases ? "button" : "disabled"}`

    return (
        <div>
            <div className="container">
                <div className={"settings-display"}>
                    <div>
                        Max value:
                        Start value:
                    </div>
                    <div>
                        <SuperInput value={maxValue}
                                    className={maxValueCorrectCasesStyle}
                                    callback={maxValueSet}/>
                        <SuperInput value={startValue}
                                    className={startValueCorrectCasesStyle}
                                    callback={startValueSet}/>
                    </div>
                </div>
                <div className="buttons-display">
                    <SuperButton name={"SET"}
                                 callback={setCounterValue}
                                 className={setClass}
                                 disabled={ buttonDisabled }
                    />
                </div>

            </div>
        </div>
    );

};
