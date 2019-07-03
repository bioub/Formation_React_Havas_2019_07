import React, { Component } from "react";
import { store } from "../store";
import { Counter } from "../components/Counter";
import { selectCount } from "../store/selectors";
import { counterIncrement } from "../store/actions";

export class CounterContainer extends Component {
  state = {
    count: 0
  };
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        count: selectCount(store.getState()),
      });
    });
  }
  handleIncrement = () => {
    store.dispatch(counterIncrement());
  };
  render() {
    return (
      <Counter count={this.state.count} increment={this.handleIncrement} />
    );
  }
}
