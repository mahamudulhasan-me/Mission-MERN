import "./App.css";

function App() {
  const handleUsers = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch(`http://localhost:8080/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
      });
    form.reset();
  };
  return (
    <>
      <h2>Simple CRUD Operation</h2>
      <hr />
      <form onSubmit={handleUsers}>
        <input type="text" name="name" placeholder="Name" /> <br />
        <input type="email" name="email" placeholder="Email" /> <br />
        <button>Add User</button>
      </form>
    </>
  );
}

export default App;
