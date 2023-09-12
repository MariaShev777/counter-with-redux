type InitialStateType = {
    maxValue: number
    startValue: number
    counter: number
    error: null | string
}

const initialState = {
    maxValue: 5,
    startValue: 0,
    counter: 0,
    error: null
}

export type ActionsType =
    | IncrementValueAT
    | SetMaxValueAT
    | SetStartValueAT
    | SetResetCounterAT
    | SetErrorAT;


export const counterReducer = (state:InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'INCREMENT-VALUE': {
            return {...state, counter: ++state.counter}
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

type IncrementValueAT = ReturnType<typeof incrementValue>
type SetMaxValueAT = ReturnType<typeof setMaxValue>
type SetStartValueAT = ReturnType<typeof setStartValue>
type SetResetCounterAT = ReturnType<typeof setResetCounter>
type SetErrorAT = ReturnType<typeof setError>

export const incrementValue = () => ({type: 'INCREMENT-VALUE'} as const);

export const setMaxValue = (maxNum: number) => ({type: 'SET-MAX-VALUE', payload: {maxNum}} as const);

export const setStartValue = (startNum: number) => ({type: 'SET-START-VALUE', payload: {startNum}} as const);

export const setResetCounter = () => ({type: 'SET-RESET-COUNTER'} as const);

export const setError = (error: null | string) => ({type: 'SET-ERROR', payload: {error}} as const);

