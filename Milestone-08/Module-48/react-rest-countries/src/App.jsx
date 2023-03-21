import "./App.css";

function App() {
  return <div className="App"></div>;
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch(`https://restcountries.com/v3.1/all`)
//       .then((response) => response.json())
//       .then((data) => setCountries(data));
//   }, []);
//   return (
//     <div>
//       <h1>Visiting Every Country of the World</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       {countries.map((country) => (
//         <DisplayCountries
//           name={country.name.official}
//           population={country.population}
//         ></DisplayCountries>
//       ))}
//     </div>
//   );
// }
// function DisplayCountries(props) {
//   return (
//     <div className="country">
//       <h2>Name: {props.name}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>
//   );
// }
export default App;
