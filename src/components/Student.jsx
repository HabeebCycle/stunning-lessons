import React from "react";

const Student = ({ name, score }) => {
  //Destructuring
  return (
    <>
      <h3>Name: {name}</h3>
      <h5>Score: {score}</h5>
    </>
  );
};

export default Student;
