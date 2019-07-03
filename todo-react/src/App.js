import React, { Component } from "react";
import { TodoList } from "./todos/TodoList";
import { TodoForm } from "./todos/TodoForm";

class App extends Component {
  state = {
    todos: [
      {
        id: 123,
        title: "Acheter du pain",
        completed: true
      },
      {
        id: 345,
        title: "Utiliser Redux",
        completed: false
      }
    ]
  };
  handleTodoAdd = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };
  handleTodoDelete = todoToDelete => {
    this.setState({
      todos: this.state.todos.filter(todo => todoToDelete !== todo)
    });
  };
  render() {
    return (
      <div className="App">
        <TodoForm onTodoAdd={this.handleTodoAdd} />
        <TodoList
          onTodoDelete={this.handleTodoDelete}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
