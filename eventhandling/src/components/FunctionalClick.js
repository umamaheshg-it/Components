import React from "react";
function FunctionalClick() {
  function clickHandler() {
    console.log('clicked')
    
  }
  return (
    <div>
      <button onClick={clickHandler}>Click Here</button>
    </div>
  );
}

export default FunctionalClick;
