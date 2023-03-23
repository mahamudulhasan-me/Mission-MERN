import React, { useEffect, useState } from "react";
import ToDoDisplay from "./ToDoDisplay";

const ToDoLoad = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, []);
  return (
    <div>
      {todo.map((todo) => (
        <ToDoDisplay key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ToDoLoad;
