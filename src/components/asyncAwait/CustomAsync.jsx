import React from "react";

const CustomAsync = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const asFun = async () => {
      console.log("Here 0");
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      console.log("Here 1");
      const d = await res.json();
      console.log(d);
      //setData(d);
    };

    asFun();
  }, []);

  return <div>{data}</div>;
};

export default CustomAsync;
