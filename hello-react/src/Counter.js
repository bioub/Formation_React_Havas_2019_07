import React, { Component } from 'react';

export class Counter extends Component {
  state = {
    count: 0,
  }
  // constructor() {
  //   super();
  //   this.state = {
  //     count: 0,
  //   };
  //   this.increment = this.increment.bind(this);
  // }
  increment = (event) => {
    console.log(event.target)
    // componentDidMount() :
    // div.addEventListener('click', this.increment);
    // +
    // componentWillUnmount
    // div.removeEventListener('click', this.increment);
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div className="Counter" onClick={this.increment}>
        {this.state.count}
      </div>
    )
  }
}