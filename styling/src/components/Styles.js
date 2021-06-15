import React from "react";
import primary from "./Mystyles.css";
function Styles(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h2 className={`${className} font-xl`}>Helloworld CSS</h2>
    </div>
  );
}

export default Styles;
