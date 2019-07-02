import React, { Component } from 'react';

export class Clock extends Component {
  constructor() {
    super();
    this.state = {
      label: 'Heure',
      now: new Date(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      // Object.assign MDN
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }
  render() {
    // this.props (Props)
    return (
      <div className="Clock">
        {this.state.label}: {this.state.now.toLocaleTimeString()}
      </div>
    )
  }
}