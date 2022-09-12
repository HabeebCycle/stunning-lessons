import React from "react";
import Result from "./Result";

const Person = (props) => {
  //props = {name:"Habeeb", score:70}
  const calc = (sco) => {
    if (sco >= 70) return "A";
    return "B";
  };

  return (
    <div>
      <h3>Name: {props.name}</h3>
      <Result calcStatus={calc} score={props.score} />
    </div>
  );
};

export default Person;
