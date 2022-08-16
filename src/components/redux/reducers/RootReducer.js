import { combineReducers } from "redux";
import CounterReducer from "./Counter/CounterReducer";
import TaskReducer from "./Tasks/TaskReducer";

const rootReducer = combineReducers({
    CounterReducer: CounterReducer,
    TaskReducer:TaskReducer,
});
export default rootReducer;