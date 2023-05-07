// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  const handleDelete = (_id) => {
    fetch(`http://localhost:8080/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully!");
          const remainingUsers = users.filter((user) => user._id !== _id);
          setUsers(remainingUsers);
        }
      });
  };
  return (
    <div>
      <h4>Total Number of users: {users.length}</h4>
      {users.map((user) => (
        <p key={user._id}>
          Name: {user.name}, Email: {user.email}{" "}
          <button>
            <Link to={`/update/${user._id}`}>Update</Link>
          </button>{" "}
          <button onClick={() => handleDelete(user._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
