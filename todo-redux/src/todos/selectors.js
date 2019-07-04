import { createSelector } from "reselect";

// createSelector améliore les perfs
// selectTodosItems({todos: { items: []}}) => []
// au 2e appel avec le même state
// on retourne directement => []

export const selectTodos = state => state.todos;

export const selectTodosItems = createSelector(
  selectTodos,
  todos => todos.items
);

export const selectTodosNewValue = createSelector(
  selectTodos,
  todos => todos.newValue
);
