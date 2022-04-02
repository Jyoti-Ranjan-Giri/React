import React from 'react';
class Counter1 extends React.Component {
  state = {
    count: 1,
  };
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Class-Counter</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Count</button>
      </div>
    );
  }
}
export default Counter1;
