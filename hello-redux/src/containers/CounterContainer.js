import { connect } from "react-redux";

import { Counter } from "../components/Counter";
import { selectCount } from "../store/selectors";
import { counterIncrement } from "../store/actions";

function mapStateToProps(state, ownProps) {
  return {
    count: selectCount(state, ownProps.storeKey)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    increment() {
      dispatch(counterIncrement(1, ownProps.storeKey));
    }
  };
}

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
