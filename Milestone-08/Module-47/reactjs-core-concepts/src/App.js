import "./App.css";

function App() {
  const players = ["Sakib", "Mushfiq", "Tamim", "Mashrafee"];
  return (
    <div className="App">
      {players.map((player) => (
        <li>Name: {player}</li>
      ))}
    </div>
  );
}
function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <h2>Nayika: {props.nayika}</h2>
    </div>
  );
}

function Friend(props) {
  // console.log(props);
  return (
    <div className="friend">
      <h3>Name: Ajay Devgun</h3>
      <h3>Phone:{props.phone}</h3>
      <h3>Movie: {props.movie}</h3>
      <p>Job: Maramari</p>
    </div>
  );
}
export default App;
