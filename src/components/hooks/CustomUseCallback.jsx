import React from "react";
import { useState, useRef, memo } from "react";
import TestCallback from "./TestCallback";

const CustomUseCallback = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("Rasheedat");

  const changeValue = React.useCallback((val) => {
    setValue(val);
  }, []);

  return (
    <div>
      <TestCallback value={value} changeValue={changeValue} />
      <hr />
      <p>Increment {count}</p>
      <p>Value {value}</p>
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CustomUseCallback;
