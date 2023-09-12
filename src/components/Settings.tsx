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
    maxValueCorrectCases: boolean
    startValueCorrectCases: boolean
}

export const Settings = (props: SettingsPropsType) => {


    const maxValueChangeHandler = (maxNum: number) => {
        props.maxValueSet(maxNum)
    }

    const startValueChangeHandler = (startNum: number) => {
        props.startValueSet(startNum)
    }


    const maxValueIncorrectCasesStyle = props.maxValueCorrectCases ? "input" : "input-error"

    const startValueIncorrectCasesStyle = props.startValueCorrectCases ? "input" : "input-error"



    const setClass = `button
    ${props.btnSetDisabled ? 'disabled' : ''}`



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
                                    className={maxValueIncorrectCasesStyle}
                                    callback={maxValueChangeHandler}/>
                        <SuperInput value={props.startValue}
                                    className={startValueIncorrectCasesStyle}
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
