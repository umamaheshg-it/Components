import React from "react";
function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>
        Call Parent Component
      </button>
    </div>
  );
}

export default ChildComponent;
