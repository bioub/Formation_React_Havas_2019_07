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
      case 'TODO_FETCH_SUCCESS':
          return action.payload;
    default:
      return previousState;
  }
}

export function loadingReducer(previousState = false, action) {
  switch (action.type) {
    case "TODO_FETCH_REQUESTED":
      return true;
    case "TODO_FETCH_SUCCESS":
      return false;
    default:
      return previousState;
  }
}

export const todosReducer = combineReducers({
  loading: loadingReducer,
  newValue: newTodoReducer,
  items: itemsReducer
});
