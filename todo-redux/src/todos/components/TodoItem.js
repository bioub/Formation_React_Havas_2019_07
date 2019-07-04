import React from "react";

/**
 *
 * @param {object} props
 * @param {object} props.todo
 * @param {number} props.todo.id
 * @param {string} props.todo.title
 * @param {boolean} props.todo.completed
 */
export function TodoItem(props) {
  return (
    <div className="TodoItem">
      {props.todo.title}
      <button onClick={() => props.onTodoDelete(props.todo)}>-</button>
    </div>
  );
}
