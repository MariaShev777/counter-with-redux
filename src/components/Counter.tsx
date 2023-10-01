import React from "react";
import {SuperButton} from "./common/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../state/store";
import {incrementValue, InitialStateType, setResetCounter} from "../state/counter-reducer";



export const Counter = () => {
    const state = useSelector<AppStateType, InitialStateType>(state => state.app);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(incrementValue()); //AC
    }

    const reset = () => {
        dispatch(setResetCounter());
    }

    // const incDisabled = state.counter === state.maxValue || state.error === "Incorrect value" || state.error === "Enter values and press 'SET'";
    // const resetDisabled = state.counter === state.startValue || state.error === "Incorrect value" || state.error === "Enter values and press 'SET'";


    const _Disabled = (value: number) => state.counter === value || state.error === "Incorrect value" || state.error === "Enter values and press 'SET'"


    const errorClass = (state.error === "Incorrect value" ? "error-text-in-red-display" : "error-text-display")
    const displayClass = (state.counter === state.maxValue ? "counter-error" : "counter")


    const incClass = `button
    ${_Disabled(state.maxValue) ? "disabled" : ""}`

    const resetClass = `button
    ${_Disabled(state.startValue) ? "disabled" : ""}`


    return (
        <div>
            <div className="container">

                <div className="display">
                    {state.error
                        ? <div className={errorClass}>{state.error}</div>
                        : <div className={displayClass}>{state.counter}</div>}
                </div>

                <div className="buttons-display">
                    <SuperButton name={'INC'}
                                 callback={increment}
                                 className={incClass}
                                 disabled={_Disabled(state.maxValue)}
                    />
                    <SuperButton name={'RESET'}
                                 callback={reset}
                                 className={resetClass}
                                 disabled={_Disabled(state.startValue)} />
                </div>

            </div>
        </div>
    );
};
