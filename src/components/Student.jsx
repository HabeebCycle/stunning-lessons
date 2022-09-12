import React from "react";

const Student = ({ name, score }) => {
  //Destructuring
  return (
    <div>
      <h3>Name: {name}</h3>
      <h5>Score: {score}</h5>
    </div>
  );
};

export default Student;
