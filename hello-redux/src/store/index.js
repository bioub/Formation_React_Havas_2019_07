import { combineReducers, createStore } from "redux";
import { countersReducers } from "./reducers";

const reducer = combineReducers({
  counters: countersReducers,
  // todos: combineReducers({
  //   filter: todosFilterReducer
  //   items: todosItemsReducer,
  //   newTodoValue: newTodoValueReducer,
  // })
});


export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);