import React, { useState } from "react";

function ClickCountHook() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click{count}</button>
    </div>
  );
}

export default ClickCountHook;
