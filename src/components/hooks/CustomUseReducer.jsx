import React from "react";

const openingBalance = 100.0;

const reducer = (accountBalance, teller) => {
  switch (teller.type) {
    case "DEPOSIT": {
      return accountBalance + teller.amount;
    }
    case "WITHDRAW": {
      if (accountBalance >= teller.amount) {
        return accountBalance - teller.amount;
      }
      return accountBalance;
    }
    default:
      return accountBalance;
  }
};

const CustomUseReducer = () => {
  const [value, setValue] = React.useState("0");
  const [balance, dispatch] = React.useReducer(reducer, openingBalance);

  return (
    <div>
      <p>Balance: {balance}</p>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <br />
      <button
        onClick={() => {
          dispatch({ type: "DEPOSIT", amount: Number(value) });
        }}
      >
        Deposit
      </button>
      <button
        onClick={() => {
          dispatch({ type: "WITHDRAW", amount: Number(value) });
        }}
      >
        Widthraw
      </button>
      <br />
      <p>Teller Amount: {value}</p>
    </div>
  );
};

export default CustomUseReducer;
