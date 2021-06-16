import React, { Component } from "react";
import Input from "./Input";
class FocusInput extends Component {
  constructor() {
    super();
    this.componentRef = React.createRef();
  }
  focusHandler = () => {
    this.componentRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.focusHandler}>FocusInput</button>
      </div>
    );
  }
}

export default FocusInput;
