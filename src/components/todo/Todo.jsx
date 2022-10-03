import React from "react";

const Todo = ({ todo, fetchApi }) => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const getInitialData = (res) => {
    setData(res);
    setLoading(false);
    console.log("Here I am");
  };

  const initiateError = (err) => {
    setLoading(false);
  };

  const getTodo = () => {
    setLoading(true);
    fetchApi(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      getInitialData,
      initiateError
    );
    console.log("I'm called first");
  };
  return (
    <div className={`todo ${todo.completed && "todo2"}`} onClick={getTodo}>
      <p>User Id : {todo.userId}</p>
      <p>Title : {todo.title}</p>
      <p>Completed: {todo.completed ? "TRUE" : "FALSE"}</p>
      {loading && <p>Loading...</p>}
      <p style={{ color: "purple" }}>{data?.title}</p>
    </div>
  );
};

export default Todo;
