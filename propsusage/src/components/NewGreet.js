import React from "react";
const NewGreet = props => {
return(
  <div>
     <h1> Hello {props.name} Age is: {props.age}</h1>
     {props.children}
  </div>
)
}


export default NewGreet;
