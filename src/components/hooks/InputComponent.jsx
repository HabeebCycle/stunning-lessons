import React, { useState } from "react";

const InputComponent = () => {
  const [text, setText] = useState("");

  //const changeText = (evt) => setText(evt.target.value);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(evt) => setText(evt.target.value)} // or use (e) => changeText(e)
      />
      <h3>Typed Text is shown below</h3>
      <p>{text}</p>
    </div>
  );
};

export default InputComponent;
