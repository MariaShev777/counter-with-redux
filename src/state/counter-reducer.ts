import {Dispatch} from "redux";

const initialState = {
    maxValue: 5,
    startValue: 0,
    counter: 0,
    error: ''
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'INCREMENT-VALUE': {
            return {...state, counter: state.counter + 1}
        }
        case 'SET-MAX-VALUE': {
            return {...state, maxValue: action.payload.maxNum}
        }
        case 'SET-START-VALUE': {
            return {...state, startValue: action.payload.startNum}
        }
        case 'SET-RESET-COUNTER': {
            return {...state, counter: state.startValue}
        }
        case 'SET-ERROR': {
            return {...state, error: action.payload.error}
        }
        default:
            return state
    }
}


export const incrementValue = () => ({type: 'INCREMENT-VALUE'} as const);

export const setMaxValue = (maxNum: number) => ({type: 'SET-MAX-VALUE', payload: {maxNum}} as const);

export const setStartValue = (startNum: number) => ({type: 'SET-START-VALUE', payload: {startNum}} as const);

export const setResetCounter = () => ({type: 'SET-RESET-COUNTER'} as const);

export const setError = (error: string) => ({type: 'SET-ERROR', payload: {error}} as const);


export const saveDataIntoLS = (key: string, value: string) => (dispatch: Dispatch) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getDataFromLS = (key: string) => () => {
    localStorage.getItem(key)

}

export type InitialStateType = {
    maxValue: number
    startValue: number
    counter: number
    error: string
}

export type ActionsType =
    | ReturnType<typeof incrementValue>
    | ReturnType<typeof setMaxValue>
    | ReturnType<typeof setStartValue>
    | ReturnType<typeof setResetCounter>
    | ReturnType<typeof setError>;
