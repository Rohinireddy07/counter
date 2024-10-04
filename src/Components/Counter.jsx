import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
}
  increment = () => {
    this.setState({ count: this.state.count + 1 });
};

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
};

  reset = () => {
    this.setState({ count: 0 });
};

  render() {
    return (
      <>
       
        <div className="c1">
          <h1>COUNTER APPLICATION</h1>
          <button className="c2" onClick={this.increment}>
            +
          </button>
          <span className="c3">{this.state.count}</span>
          <button className="c4" onClick={this.decrement}>
            -
          </button>
          <button className="c5" id="d1" onClick={this.reset}>
            Reset
          </button>
        </div>
      </>
    );
  }
}