import React from "react";
import { TodoFormContainer } from "../containers/TodoFormContainer";
import { TodoListContainer } from "../containers/TodoListContainer";

export function Home() {
  return (
    <div className="Todos">
      <h2>Todos</h2>
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
}
