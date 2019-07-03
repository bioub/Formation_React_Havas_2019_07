import { combineReducers, createStore } from "redux";
import { countReducer } from "./reducers";

const reducer = combineReducers({
  count: countReducer
});


export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);