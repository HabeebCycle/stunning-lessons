import React, { useState, useEffect } from "react";
//useEffect(() => {}, []); []//Dependency Array
const CustomUseEffect = () => {
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(true);

  /*
  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 5000);
  }, [clicked]);
  */
  useEffect(() => {
    setLoading(!loading);
  }, [clicked]);

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Loaded</p>}
      <button onClick={() => setClicked(!clicked)}>
        {clicked ? "Stop Loading" : "Load Again"}
      </button>
    </div>
  );
};

export default CustomUseEffect;
