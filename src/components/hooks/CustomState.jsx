import React, { useState } from "react";

const CustomState = () => {
  const [cars, setCars] = useState(["Toyota", "Honda", "Mazda"]);
  const [scores, setScores] = useState({
    subject: "English",
    total: 100.0,
    mark: 0,
  });

  const addCars = (name) => setCars((prevState) => [...prevState, name]);
  const subCars = (name) => setCars((p) => p.filter((c) => c !== name));
  const addScore = (mark) => setScores({ ...scores, mark });
  //const addScore2 = (mark) => setScores((p) => ({ ...p, mark }));

  return (
    <div>
      {cars.map((car, index) => (
        <p key={index}>{car}</p>
      ))}
      <button onClick={() => addCars("Renault")}>Add Renault</button>
      <button onClick={() => addCars("Hyundai")}>Add Hyundai</button>
      <button onClick={() => addCars("Mercedes")}>Add Mercedes</button>
      <button onClick={() => subCars("Renault")}>Remove Renault</button>
      <button onClick={() => subCars("Hyundai")}>Remove Hyundai</button>
      <button onClick={() => subCars("Mercedes")}>Remove Mercedes</button>

      <p>Subject: {scores.subject}</p>
      <p>Total: {scores.total}</p>
      <p>Percentage: {(100 * scores.mark) / scores.total}%</p>

      <button onClick={() => addScore(76)}>Add Score</button>
    </div>
  );
};

export default CustomState;
