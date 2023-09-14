import React from "react";


type SuperButtonPropsType = {
    callback: () => void
    disabled?: boolean
    className?: string
    name: string
}

export const SuperButton = (props: SuperButtonPropsType) => {


    return (
           <button onClick={props.callback} disabled={props.disabled} className={props.className}>{props.name}</button>
    );
};
