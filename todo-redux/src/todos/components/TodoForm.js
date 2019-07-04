import React, { Component } from "react";

export class TodoForm extends Component {
  handleChange = event => {
    this.props.onTodoChange(event.target.value);
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.onTodoAdd({
      id: Math.random(),
      title: this.props.todoValue,
      completed: false,
    });
  };
  render() {
    return (
      <form className="TodoForm" onSubmit={this.handleSubmit}>
        <input value={this.props.todoValue} onChange={this.handleChange} />
        <button>+</button>
      </form>
    );
  }
}
