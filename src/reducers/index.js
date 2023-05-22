import changeReducer from "./change";
import { combineReducers } from "redux";
import timeReducer from "./time";
import popReducer from "./pop";
const rootReducer = combineReducers({
    change: changeReducer,
    time: timeReducer,
    pop: popReducer
})

export default rootReducer;