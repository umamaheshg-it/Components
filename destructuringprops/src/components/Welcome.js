import React, { Component } from "react";
class Welcome extends Component {
  
  render() {
    const {name}=this.props
    //const {state1}=this.state
    return <h1 style={{color:"red"}}>Welcome {name}</h1>;
  }
}

export default Welcome;
