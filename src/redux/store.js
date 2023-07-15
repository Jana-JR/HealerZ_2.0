import {createStore} from "redux";
import reducer from "./reducer";

export const store = createStore(reducer, {
    setting: {
        toggle: false,
    },
    loader: {
        isLoading: false,
    }
})