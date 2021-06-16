import React, { Component } from "react";
class Input extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  componentDidMount() {}
  focusInput = () => {
    this.inputRef.current.focus();
    //alert(this.inputRef.current.value)
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default Input;
