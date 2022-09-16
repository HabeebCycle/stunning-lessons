import React from "react";

const EventComponent = () => {
  return (
    <>
      {
        //<p>Habeeb</p>
      }
      <button onDoubleClick={() => alert("Rasheedat")}>Click Me!</button>
    </>
  );
};

export const Condition1Component = (props) => {
  if (props.name) {
    return <p>Name passed: {props.name}</p>;
  }
  return <p>No name passed.</p>;
};

export const Condition2Component = (props) => {
  return props.name ? (
    <p>Name passed2: {props.name}</p>
  ) : (
    <p>No name passed2.</p>
  );
};

export const Condition3Component = () => {
  const x = -1;
  return x > 0 && <p>X is greater than 0</p>;
};

export const Condition4Component = ({ name }) => name && <p>f{name}</p>;

export const Condition5Component = ({ arr }) => {
  const xyz = arr.map((x) => 2 * x);
  return arr && xyz.map((a, i) => <p key={i}>{a}</p>);
};

export default EventComponent;
