import React, { useState } from "react";

const CustomForm = () => {
  const [details, setDetails] = useState({});

  return (
    <div>
      <form>
        <label label-for="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={details.name}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
        />
        <br />
        <label label-for="age">Age: </label>
        <input
          type="text"
          name="age"
          id="age"
          value={details.age}
          onChange={(e) => setDetails({ ...details, age: e.target.value })}
        />
        <br />
        <label label-for="state">State: </label>
        <input
          type="text"
          name="state"
          id="state"
          value={details.state}
          onChange={(e) => setDetails({ ...details, state: e.target.value })}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      Name: {details.name}
      <br />
      Age: {details.age}
      <br />
      State: {details.state}
      <br />
      <p>{JSON.stringify(details)}</p>
    </div>
  );
};

export default CustomForm;
