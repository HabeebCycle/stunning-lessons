import React from "react";

const MyStyle = () => {
  const customStyle = {
    fontWeight: "bold",
    color: "purple",
  };
  return (
    <div
      style={{
        border: "1px solid #4567AE",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center", //IF row - horizontal
        flexDirection: "column",
        alignItems: "center", // IF column - horizontal
      }}
    >
      <p id="my-id" style={customStyle}>
        Welcome to React
      </p>
      <p className="my-style">Habeeb</p>
      <p id="my-id">Okunade</p>
    </div>
  );
};

export default MyStyle;
