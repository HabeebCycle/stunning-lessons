import Person from "./components/Person";
import Student from "./components/Student";

function App() {
  return (
    <div>
      <div>Welcome to React2</div>
      <Person name="Habeeb" score={69} />
      <Person name={"Rasheedat"} score={75} />
      <Person name={"Raheemat"} score={85} />
      <Person name={"Ganiyat"} score={82} />
      <Student name={"Maryam"} score={90} />
      <Student name={"Abdurrahman"} score={95} />
    </div>
  );
}

export default App; //props
