import "./App.css";
import MobileBattery from "./component/Mobile/MobileBattery";
import ToDoLoad from "./component/ToDo/ToDoLoad";

function App() {
  return (
    <div className="App">
      <ToDoLoad />
      <MobileBattery />
    </div>
  );
}

export default App;
