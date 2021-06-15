import React, { Component } from "react";
class ClassClick extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World"
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      message: "New World"
    });
  }
  render() {
    return (
      <div>
        {this.state.message}
        {/*<button onClick={this.clickHandler.bind(this)}>Click Me</button>*/}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
