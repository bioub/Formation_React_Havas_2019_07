import React from "react";
import { TodoItem } from "./TodoItem";

export function TodoList(props) {
  return (
    <div className="TodoList">
      {props.todos.map(todo => (
        <TodoItem onTodoDelete={props.onTodoDelete} key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
