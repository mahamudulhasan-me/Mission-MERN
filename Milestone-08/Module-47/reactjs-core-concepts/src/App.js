import "./App.css";

const showNameStyle = {
  border: "1px solid red",
  padding: "1rem",
  margin: "1rem",
};
function App() {
  const playersInfo = [
    { name: "Sakib", batter: "Yes", bowling: "Yes" },
    { name: "Tamim", batter: "Yes", bowling: "No" },
    { name: "Musfique", batter: "Yes", bowling: "No" },
  ];
  return (
    <div className="App">
      {playersInfo.map(({ name, batter, bowling }) => (
        <ShowName name={name} batter={batter} bowling={bowling}></ShowName>
      ))}
    </div>
  );
}

function ShowName(props) {
  return (
    <div style={showNameStyle}>
      <h2>Name: {props.name}</h2>
      <h3>Batter: {props.batter}</h3>
      <h3>Bowling: {props.bowling}</h3>
    </div>
  );
}
export default App;
