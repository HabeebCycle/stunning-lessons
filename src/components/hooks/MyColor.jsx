import React, { useState } from "react";

const MyColor = () => {
  const [color, setColor] = useState("white");
  return (
    <div className={"count-div"}>
      <h3>My Favourite Color is {color.toUpperCase()}</h3>
      <div style={{ width: "40px", height: "40px", background: color }}></div>
      <div>
        {color !== "pink" && (
          <button onClick={() => setColor("pink")}>PINK</button>
        )}
        {color !== "red" && (
          <button onClick={() => setColor("red")}>RED</button>
        )}
        {color !== "blue" && (
          <button onClick={() => setColor("blue")}>BLUE</button>
        )}
        {color !== "orange" && (
          <button onClick={() => setColor("orange")}>ORANGE</button>
        )}
        {color !== "black" && (
          <button onClick={() => setColor("black")}>BLACK</button>
        )}
      </div>
    </div>
  );
};

export default MyColor;
