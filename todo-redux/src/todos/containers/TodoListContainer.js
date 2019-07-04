import { connect } from "react-redux";
import { TodoList } from "../components/TodoList";
import { selectTodosItems } from "../selectors";
import { todoDelete } from "../actions";

function mapStateToProps(state) {
  return {
    todos: selectTodosItems(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoDelete(todo) {
      dispatch(todoDelete(todo));
    }
  };
}

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
