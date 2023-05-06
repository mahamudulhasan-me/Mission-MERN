import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:6969/users`)
      .then((res) => res.json())
      .then((user) => setUsers(user));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    fetch(`http://localhost:6969/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((user) => {
        const newUser = [...users, user];
        setUsers(newUser);
      });
    form.reset();
  };
  return (
    <>
      <h2>Users Management System</h2>
      <p>Number of users: {users.length} </p>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Enter your name" />
        <br />
        <input type="email" name="email" placeholder="Enter your email" />
        <br />
        <button>Submit</button>
      </form>
      <div className="card">
        {users.map((user) => (
          <p key={user._id}>
            {user._id}. {user.name}, {user.email}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
