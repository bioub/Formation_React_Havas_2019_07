import { connect } from "react-redux";
import { TodoList } from "../components/TodoList";
import { selectTodosItems } from "../selectors";
import { todoDelete } from "../actions";
import { fetchTodos } from "../api";

function mapStateToProps(state) {
  return {
    loading: state.todos.loading,
    todos: selectTodosItems(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoDelete(todo) {
      dispatch(todoDelete(todo));
    },
    // onLoad() {
    //   dispatch(todoFetch());
    // }
    async onLoad() {
      dispatch({ type: "TODO_FETCH_REQUESTED" });
      const todos = await fetchTodos();
      dispatch({ type: "TODO_FETCH_SUCCESS", payload: todos });
    }
  };
}

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
