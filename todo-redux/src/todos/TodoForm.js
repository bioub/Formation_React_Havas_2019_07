import React, { Component } from "react";

export class TodoForm extends Component {
  state = {
    todoValue: 'Acheter du lait'
  };
  handleChange = event => {
    this.setState({
      todoValue: event.target.value,
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.onTodoAdd({
      id: Math.random(),
      title: this.state.todoValue,
      completed: false,
    });
  };
  render() {
    return (
      <form className="TodoForm" onSubmit={this.handleSubmit}>
        <input value={this.state.todoValue} onChange={this.handleChange} />
        <button>+</button>
      </form>
    );
  }
}
