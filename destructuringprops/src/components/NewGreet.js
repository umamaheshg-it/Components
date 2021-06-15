import React from "react";
const NewGreet =props => {
  const {name,age}=props
  return (
    <div>
      <h1 style={{color:"orange"}}>
        Hello {name} Age is: {age}
      </h1>
    </div>
  );
};

export default NewGreet;
