import React from "react";

const Result = ({ score, calcStatus }) => {
  return (
    <div>
      <p>Score: {score}</p>
      <p>Status: {calcStatus(score)}</p>
    </div>
  );
};

export default Result;
