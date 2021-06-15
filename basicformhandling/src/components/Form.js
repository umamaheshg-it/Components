import React, { Component } from "react";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }
  handleUserName = (event) => {
    this.setState({ username: event.target.value });
  };
  handleSubmit = (event) => {
    alert(`Hello ${this.state.username}`);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserName}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
