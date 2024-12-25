
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import RootReducer from "./reducer/rootReducer";

const store = createStore(RootReducer,applyMiddleware(thunk) )

export default store;
