import React from "react";

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <p>User Id : {todo.userId}</p>
      <p>Title : {todo.title}</p>
      <p>Completed: {todo.completed ? "TRUE" : "FALSE"}</p>
    </div>
  );
};

export default Todo;
