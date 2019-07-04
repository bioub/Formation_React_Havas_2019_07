import React, { useEffect } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList(props) {
  useEffect(() => {
    // props.onLoad(); // redux-thunk
    async function getData() {
      await props.onLoad();
    }
    if (!props.todos.length) {
      getData();
    }
  }, []);
  return (
    <div className="TodoList">
      {props.loading
        ? "Chargement..."
        : props.todos.map(todo => (
            <TodoItem
              onTodoDelete={props.onTodoDelete}
              key={todo.id}
              todo={todo}
            />
          ))}
    </div>
  );
}
