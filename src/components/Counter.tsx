import React from "react";
import {SuperButton} from "./SuperButton";
import {useSelector} from "react-redux";
import {AppStateType} from "../state/store";
import {incrementValueAC} from "../state/counter-reducer";



type CounterPropsType = {
    maxValue: number
    startValue: number
    counter: number
    increment: () => void
    reset: () => void


}

export const Counter = (props: CounterPropsType) => {


    const error = useSelector<AppStateType, null | string>(state => state.app.error);



    const incDisabled = (props.counter === props.maxValue || error === "Incorrect value")
    const resetDisabled = (props.counter === props.startValue || error === "Incorrect value")

    const errorClass = (error === "Incorrect value" ? "error-text-in-red-display" : "error-text-display")
    const displayClass = (props.counter === props.maxValue ? "counter-error" : "counter")

    const incClass = `button
    ${incDisabled ? 'disabled' : ''}`

    const resetClass = `button
    ${resetDisabled ? 'disabled' : ''}`


    return (
        <div>
            <div className="container">

                <div className="display">
                    {error ? <div className={errorClass}>{error}</div> :
                        <div className={displayClass}>{props.counter}</div>}
                </div>

                <div className="buttons-display">
                    <SuperButton name={'INC'}
                                 callback={props.increment}
                                 className={incClass}
                                 disabled={incDisabled} />
                    <SuperButton name={'RESET'}
                                 callback={props.reset}
                                 className={resetClass}
                                 disabled={resetDisabled} />
                </div>

            </div>
        </div>
    );
};
