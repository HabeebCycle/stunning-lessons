import React from "react";

const Coin = ({ coin }) => {
  const {
    name,
    symbol: { n2 },
    price,
  } = coin;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Symbol: {n2}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default Coin;
