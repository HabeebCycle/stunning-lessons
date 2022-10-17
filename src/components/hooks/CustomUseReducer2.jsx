import React from "react";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case "ADD":
      return [...state, action.todo];
    default:
      return state;
  }
};

function CustomUseReducer2() {
  const [todos, dispatch] = React.useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
      <button onClick={() => dispatch({ type: "ADD", todo })}>ADD NEW</button>
      <br />
      <code>{JSON.stringify(todos)}</code>
    </>
  );
}
const id = Number((3 + Math.random() * 10).toFixed(0));
const todo = { id, title: `Todo ${id}`, complete: false };

export default CustomUseReducer2;
