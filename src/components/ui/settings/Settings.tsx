import React, {useState} from "react";
import {SuperButton} from "../../common/SuperButton";
import {SuperInput} from "../../common/SuperInput";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../state/store";
import { setError, setMaxValue, setResetCounter, setStartValue} from "../../../state/counter-reducer";
import "./settings.css"


export const Settings = () => {
    const maxValue = useSelector<AppStateType, number>(state => state.app.maxValue);
    const startValue = useSelector<AppStateType, number>(state => state.app.startValue);

    let [buttonDisabled, setButtonDisabled] = useState(false);

    const dispatch = useDispatch();

    const maxValueIncorrectCasesStyle = !(maxValue > 0 && maxValue > startValue) ? "input-error" : "";
    const startValueIncorrectCasesStyle = !(startValue >= 0 && startValue < maxValue) ? "input-error" : "";

    const isError = (isValid: boolean) => {
        if (isValid) {
            dispatch(setError("Enter values and press 'SET'"));
        } else {
            setButtonDisabled(true);
            dispatch(setError("Incorrect value"));
        }
    }

    const maxValueSet = (maxNum: number) => {
        setButtonDisabled(false);
        dispatch(setMaxValue(maxNum));
        isError(maxNum > 0 && maxNum > startValue && startValue >= 0);
    }

    const startValueSet = (startNum: number) => {
        setButtonDisabled(false);
        dispatch(setStartValue(startNum));
        isError(startNum >= 0 && startNum < maxValue);
    }

    const setCounterValue = () => {
        dispatch(setResetCounter());
        dispatch(setError(""));
        setButtonDisabled(true);
    }

    const setClass = `button
    ${maxValueIncorrectCasesStyle && startValueIncorrectCasesStyle ? "disabled" : "button"}`

    return (
        <div className="container">
            <div className={"settings-display"}>
                <div>
                    Max value:
                    Start value:
                </div>
                <div>
                    <SuperInput value={maxValue}
                                className={`input ${maxValueIncorrectCasesStyle}`}
                                callback={maxValueSet}/>
                    <SuperInput value={startValue}
                                className={`input ${startValueIncorrectCasesStyle}`}
                                callback={startValueSet}/>
                </div>
            </div>
            <div className="buttons-display">
                <SuperButton name={"SET"}
                             callback={setCounterValue}
                             className={setClass}
                             disabled={buttonDisabled}
                />
            </div>
        </div>
    );
};
