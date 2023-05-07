import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    console.log(name, email);
    fetch(`http://localhost:8080/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated user successfully");
        }
      });
  };
  return (
    <div>
      <p>Update {loadedUser?.name}&apos;s info</p>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedUser?.name} id="" />{" "}
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loadedUser?.email}
          id=""
        />{" "}
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
