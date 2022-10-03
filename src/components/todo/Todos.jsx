import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState("");
  //https://jsonplaceholder.typicode.com

  const fetchApi = (url, fFxn, eFxn) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => fFxn(data))
      .catch((err) => eFxn(err));
  };

  React.useEffect(() => {
    const getInitialData = (data) => {
      setData(data);
      setError("");
      setIsLoading(false);
    };

    const initiateError = (err) => {
      setError(err.message);
      setIsLoading(false);
    };

    fetchApi(
      "https://jsonplaceholder.typicode.com/todos",
      getInitialData,
      initiateError
    );
  }, []);

  return (
    <div>
      <p>My Todos</p>
      <div className="todos">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data.map((obj) => (
          <Todo key={obj.id} todo={obj} fetchApi={fetchApi} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
