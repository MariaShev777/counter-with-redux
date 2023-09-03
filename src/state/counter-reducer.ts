

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
    | ResetCounterAT
    | SetErrorAT;


export const counterReducer = (state:InitialStateType = initialState, action: ActionsType): InitialStateType => {
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

type IncrementValueAT = ReturnType<typeof incrementValueAC>
type SetMaxValueAT = ReturnType<typeof setMaxValueAC>
type SetStartValueAT = ReturnType<typeof setStartValueAC>
type ResetCounterAT = ReturnType<typeof setResetCounterAC>
type SetErrorAT = ReturnType<typeof setErrorAC>

export const incrementValueAC = () => ({type: 'INCREMENT-VALUE'} as const);

export const setMaxValueAC = (maxNum: number) => ({type: 'SET-MAX-VALUE', payload: {maxNum}} as const );

export const setStartValueAC = (startNum: number) => ({type: 'SET-START-VALUE', payload: {startNum}} as const);

export const setResetCounterAC = () => ({type: 'SET-RESET-COUNTER'} as const);

export const setErrorAC = (error: null | string) => ({type: 'SET-ERROR', payload: {error}} as const);

