import React from "react";
import {SuperButton} from "./SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../state/store";
import {incrementValue, setResetCounter} from "../state/counter-reducer";



type CounterPropsType = {
    maxValue: number
    startValue: number
}

export const Counter = (props: CounterPropsType) => {
    const counter = useSelector<AppStateType, number>(state => state.app.counter);
    const error = useSelector<AppStateType, null | string>(state => state.app.error);

    const dispatch = useDispatch();

    const increment = () => {
        dispatch(incrementValue());
    }

    const reset = () => {
        dispatch(setResetCounter());
    }


    const incDisabled = (counter === props.maxValue || error === "Incorrect value")
    const resetDisabled = (counter === props.startValue || error === "Incorrect value")

    const errorClass = (error === "Incorrect value" ? "error-text-in-red-display" : "error-text-display")
    const displayClass = (counter === props.maxValue ? "counter-error" : "counter")

    const incClass = `button
    ${incDisabled ? 'disabled' : ''}`

    const resetClass = `button
    ${resetDisabled ? 'disabled' : ''}`


    return (
        <div>
            <div className="container">

                <div className="display">
                    {error ? <div className={errorClass}>{error}</div> :
                        <div className={displayClass}>{counter}</div>}
                </div>

                <div className="buttons-display">
                    <SuperButton name={'INC'}
                                 callback={increment}
                                 className={incClass}
                                 disabled={incDisabled} />
                    <SuperButton name={'RESET'}
                                 callback={reset}
                                 className={resetClass}
                                 disabled={resetDisabled} />
                </div>

            </div>
        </div>
    );
};
