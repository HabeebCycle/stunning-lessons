import React, { useState } from "react";

const StateHook = () => {
  const [count, setCount] = useState(0);

  const add = () => count < 10 && setCount(count + 1);
  const sub = () => count > 0 && setCount(count - 1);

  return (
    <div className={"count-div"}>
      <p>COUNT</p>
      <p id="my-id">{count}</p>
      <br />
      <div>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
      </div>
    </div>
  );
};

export default StateHook;
