import React from "react";

const ToDoDisplay = (props) => {
  const { userId, title, completed } = props.todo;
  return (
    <div style={{ border: "1px solid", margin: "10px" }}>
      <p>User id: {userId}</p>
      <h2>Title: {title}</h2>
      <h3>Complete: {completed ? "True" : "False"}</h3>
    </div>
  );
};

export default ToDoDisplay;
