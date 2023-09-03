import React, {ChangeEvent} from "react";


type SuperInputPropsType = {
    callback: (value: any) => void
    className: string
    value: number
}

export const SuperInput = (props: SuperInputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(Math.trunc(+e.currentTarget.value));
    }


    return (
        <input type='number' onChange={onChangeHandler} value={props.value} className={props.className}/>
    );
};
