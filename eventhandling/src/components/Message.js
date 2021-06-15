import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Click below button to change message "
    };
  }
  changeMessage() {
    this.setState({ message: "Message State Changed" });
  }
  render() {
    return (
      <div>
        <h2 style={{ backgroundColor: "cyan" }}>{this.state.message}</h2>
        <button onClick={() => this.changeMessage()}>
          Click to Change State
        </button>
      </div>
    );
  }
}

export default Message;
