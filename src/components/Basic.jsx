import Coin from "./Coin";
import Student from "./Student";

const Basic = () => {
  //const fxn = (str) => <h1>{str}</h1>;
  // .map(() => ())
  const names = ["Habeeb", "Rasheedat", "Raheemat"];
  const names2 = ["Habeeb1", "Rasheedat1", "Raheemat1"];
  const person = { name: "Habeeb", age: 20, height: 1.76, xyz: 2 };

  const { age, height, xyz } = person;

  const modifiedNames = [...names, ...names2, "Ganiyat", "Maryam"];

  const student = {
    name: "Habeeb",
    subject: {
      namey: "Chemistry",
      marks: 90,
    },
  };

  const api = {
    data: [
      { name: "Bitcoin", price: "20", symbol: { n1: "BTC", n2: "B" } },
      { name: "Ethereum", price: "10", symbol: { n1: "ETH", n2: "E" } },
      { name: "Tether", price: "19", symbol: { n1: "USDT", n2: "U" } },
    ],
    timestamp: 2,
  };

  const { data } = api;
  //const myData = [...data];

  const {
    name,
    subject: { marks, namey },
  } = student;

  return (
    <>
      {xyz && <h1>XYZ</h1>}
      <p>
        {age} - {height} - {xyz}
      </p>
      <p>{namey}</p>
      {modifiedNames.map((n) => (
        <Student name={n} />
      ))}
      {data.map((coin) => (
        <Coin coin={coin} />
      ))}
    </>
  );
};

export default Basic;
