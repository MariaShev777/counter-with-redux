import {combineReducers, compose, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";


const rootReducer = combineReducers({
    app: counterReducer
})


export const store = legacy_createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>


//@ts-ignore
window.store = store;