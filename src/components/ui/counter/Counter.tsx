import React from "react";
import {SuperButton} from "../../common/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../state/store";
import {incrementValue, InitialStateType, setResetCounter} from "../../../state/counter-reducer";
import "./counter.css"


export const Counter = () => {
    const dispatch = useDispatch();
    const state = useSelector<AppStateType, InitialStateType>(state => state.app);

    const increment = () => {
        dispatch(incrementValue());
    }

    const reset = () => {
        dispatch(setResetCounter());
    }

    const setDisabledStyle = (value: number) => state.counter === value || state.error !== '';

    const errorClass = (state.error === "Incorrect value" ? "error-text-in-red-display" : "error-text-display")
    const displayClass = (state.counter === state.maxValue ? "counter-error" : "counter")

    const isMaxValue = setDisabledStyle(state.maxValue)
    const isStartValue = setDisabledStyle(state.startValue)

    const incClass = `button
    ${isMaxValue ? "disabled" : ""}`

    const resetClass = `button
    ${isStartValue ? "disabled" : ""}`


    return (
            <div className="container">
                <div className="counter-display">
                    {state.error
                        ? <div className={errorClass}>{state.error}</div>
                        : <div className={displayClass}>{state.counter}</div>}
                </div>
                <div className="buttons-display">
                    <SuperButton name={"INC"}
                                 callback={increment}
                                 className={incClass}
                                 disabled={isMaxValue}
                    />
                    <SuperButton name={"RESET"}
                                 callback={reset}
                                 className={resetClass}
                                 disabled={isStartValue}/>
                </div>
            </div>
    );
};
