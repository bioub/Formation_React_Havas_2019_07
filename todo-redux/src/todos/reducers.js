import { combineReducers } from "redux";
import { TODO_CHANGE, TODO_ADD, TODO_DELETE } from "./constants";

export function newTodoReducer(previousState = "", action) {
  switch (action.type) {
    case TODO_CHANGE:
      return action.payload;
    default:
      return previousState;
  }
}

export function itemsReducer(previousState = [], action) {
  switch (action.type) {
    case TODO_ADD:
      return [...previousState, action.payload];
    case TODO_DELETE:
      return previousState.filter(todo => action.payload.id !== todo.id);
    default:
      return previousState;
  }
}

export const todosReducer = combineReducers({
  newValue: newTodoReducer,
  items: itemsReducer
});
