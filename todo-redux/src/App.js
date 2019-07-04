import React, { Component } from "react";
import { TodoList } from "./todos/TodoList";
import { TodoForm } from "./todos/components/TodoForm";
import { TodoFormContainer } from "./todos/containers/TodoFormContainer";
import { TodoListContainer } from "./todos/containers/TodoListContainer";

// class App extends Component {
//   state = {
//     newTodo: 'Achet',
//     todos: [
//       {
//         id: 123,
//         title: "Acheter du pain",
//         completed: true
//       },
//       {
//         id: 345,
//         title: "Utiliser Redux",
//         completed: false
//       }
//     ]
//   };
//   handleTodoChange = todoValue => {
//     this.setState({
//       newTodo: todoValue,
//     });
//   };
//   handleTodoAdd = todo => {
//     this.setState({
//       todos: [...this.state.todos, todo]
//     });
//   };
//   handleTodoDelete = todoToDelete => {
//     this.setState({
//       todos: this.state.todos.filter(todo => todoToDelete !== todo)
//     });
//   };
//   render() {
//     return (
//       <div className="App">
//         <TodoForm todoValue={this.state.newTodo} onTodoAdd={this.handleTodoAdd} onTodoChange={this.handleTodoChange} />
//         <TodoList
//           onTodoDelete={this.handleTodoDelete}
//           todos={this.state.todos}
//         />
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
}

export default App;
