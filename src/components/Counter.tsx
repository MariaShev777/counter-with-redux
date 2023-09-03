import React from "react";
import {SuperButton} from "./SuperButton";



type CounterPropsType = {
    maxValue: number
    startValue: number
    increment: () => void
    reset: () => void
    counter: number | null
    errorText: string | null

}

export const Counter = (props: CounterPropsType) => {



    const incDisabled = (props.counter === props.maxValue || props.errorText === "Incorrect value")
    const resetDisabled = (props.counter === props.startValue || props.errorText === "Incorrect value")

    const errorClass = (props.errorText === "Incorrect value" ? "error-text-in-red-display" : "error-text-display")
    const displayClass = (props.counter === props.maxValue ? "counter-error" : "counter")

    const incClass = `button
    ${incDisabled ? 'disabled' : ''}`


    const resetClass = `button
    ${resetDisabled ? 'disabled' : ''}`


    return (
        <div>
            <div className="container">

                <div className="display">
                    {props.errorText ? <div className={errorClass}>{props.errorText}</div> :
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
