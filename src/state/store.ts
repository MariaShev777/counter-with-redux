import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";
import {throttle} from 'lodash';

const rootReducer = combineReducers({
    app: counterReducer
})

export const store = legacy_createStore(rootReducer, loadState());

store.subscribe(throttle(() => {
    saveState({
        app: store.getState().app
    });
}, 1000))


export type AppStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store;