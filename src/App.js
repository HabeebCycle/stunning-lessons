import React from "react";
import CustomUseContext2 from "./components/hooks/CustomUseContext2";

export const StudentContext = React.createContext();

const initialState = {
  name: "Habeeb",
  score: 98,
  height: 1.78,
};

function App() {
  const [student, setStudent] = React.useState(initialState);

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      <CustomUseContext2 />
    </StudentContext.Provider>
  );
}

export default App; //props

//React Hook
// useState
// useEffect
