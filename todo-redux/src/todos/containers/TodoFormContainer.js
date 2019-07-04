import { connect } from "react-redux";
import { TodoForm } from "../components/TodoForm";
import { selectTodosNewValue } from "../selectors";
import { todoChange, todoAdd } from "../actions";

function mapStateToProps(state) {
  return {
    todoValue: selectTodosNewValue(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoChange(todoValue) {
      dispatch(todoChange(todoValue))
    },
    onTodoAdd(todo) {
      dispatch(todoAdd(todo))
    }
  };
}

export const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm);
