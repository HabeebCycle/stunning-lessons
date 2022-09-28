import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState("");
  //https://jsonplaceholder.typicode.com

  React.useEffect(() => {
    const fetchTodos = () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
          setIsLoading(false);
          setData(json);
          setError("");
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <p>My Todos</p>
      <div className="todos">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data.map((obj) => (
          <Todo key={obj.id} todo={obj} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
