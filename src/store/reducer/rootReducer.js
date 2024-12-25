import { combineReducers } from "redux";
import CharecterReducer from "./charecterReducer";

const RootReducer = combineReducers({
 Charecter:   CharecterReducer
})

export default RootReducer;