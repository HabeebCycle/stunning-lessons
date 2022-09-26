import React, { useState } from "react";

const CustomForm2 = () => {
  const [details, setDetails] = useState({ name: "", age: "", state: "" });
  const [error, setError] = useState("");

  const updateDetails = (e, field) => {
    setDetails({ ...details, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Don't refresh the page
    if (details.name && details.age && details.state) {
      setError("");
      console.log(details);
    } else setError("All fields are mandatory"); // one line
  };

  return (
    <div>
      <p style={{ color: "red" }}>{error}</p>
      {/* (e) => handleSubmit(e) */}
      <form onSubmit={handleSubmit}>
        <label label-for="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={details.name}
          onChange={(e) => updateDetails(e, "name")}
        />
        <br />
        <label label-for="age">Age: </label>
        <input
          type="text"
          name="age"
          id="age"
          value={details.age}
          onChange={(e) => updateDetails(e, "age")}
        />
        <br />
        <label label-for="state">State: </label>
        <input
          type="text"
          name="state"
          id="state"
          value={details.state}
          onChange={(e) => updateDetails(e, "state")}
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

export default CustomForm2;
