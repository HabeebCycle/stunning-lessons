import React, { useState } from "react";
import { StudentContext } from "../../App";

//Step 1
const UserContext = React.createContext();

function CustomUseContext2() {
  const [user, setUser] = useState("Rasheedat");

  return (
    //Step 2 - create provider
    <UserContext.Provider value={user}>
      <>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 />
      </>
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const { setStudent, student } = React.useContext(StudentContext);
  return (
    <>
      <h1>Component 3</h1>
      <p>{JSON.stringify(student)}</p>
      <Component4 />
      <button onClick={() => setStudent({ ...student, name: "Rasheedat" })}>
        Change
      </button>
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = React.useContext(UserContext);
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default CustomUseContext2;
