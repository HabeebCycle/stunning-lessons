import React, { useRef, memo } from "react";

const TestCallback = ({ value, changeValue }) => {
  const track = useRef(0);

  React.useEffect(() => {
    track.current = track.current + 1;
  });

  return (
    <>
      <p>Value {value}</p>
      <br />
      <p>Rerendered: {track.current}</p>
      <br />
      <button onClick={() => changeValue(`test ${value}`)}>Change Value</button>
    </>
  );
};

export default memo(TestCallback);
