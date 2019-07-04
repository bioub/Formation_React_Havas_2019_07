import React from "react";
import { TodoFormContainer } from "../containers/TodoFormContainer";
import { TodoListContainer } from "../containers/TodoListContainer";

export function Todo() {
  return (
    <div className="Todo">
      <h2>Todos</h2>
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
}
