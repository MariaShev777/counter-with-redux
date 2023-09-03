import React from "react";
import {SuperButton} from "./SuperButton";
import {SuperInput} from "./SuperInput";


type SettingsPropsType = {
    maxValue: number
    startValue: number
    maxValueSet: (maxNum: number) => void
    startValueSet: (startNum: number) => void
    setCounterValue: () => void
    btnSetDisabled: boolean
    maxValueIncorrectCases: boolean
    startValueIncorrectCases: boolean
}

export const Settings = (props: SettingsPropsType) => {


    const maxValueChangeHandler = (maxNum: number) => {
        props.maxValueSet(maxNum)
    }

    const startValueChangeHandler = (startNum: number) => {
        props.startValueSet(startNum)
    }


    const maxValueIncorrectCases = props.maxValueIncorrectCases ? "input-error" : "input"

    const startValueIncorrectCases = props.startValueIncorrectCases ? "input-error" : "input"



    const setClass = `button
    &{props.disabled ? 'disabled' : ''}`


    return (
        <div>
            <div className="container">
                <div className={"settings-display"}>
                    <div>
                        Max value:
                        Start value:
                    </div>
                    <div>
                        <SuperInput value={props.maxValue}
                                    className={maxValueIncorrectCases}
                                    callback={maxValueChangeHandler}/>
                        <SuperInput value={props.startValue}
                                    className={startValueIncorrectCases}
                                    callback={startValueChangeHandler}/>
                    </div>
                </div>
                <div className="buttons-display">
                    <SuperButton name={"SET"}
                                 callback={props.setCounterValue}
                                 className={setClass}
                                 disabled={props.btnSetDisabled}/>
                </div>

            </div>
        </div>
    );

};
