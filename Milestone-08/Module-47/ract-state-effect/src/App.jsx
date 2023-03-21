import "./App.css";

function App() {
  const products = [
    { name: "Laptop", price: 45000 },
    { name: "Laptop", price: 45000 },
    { name: "Laptop", price: 45000 },
    { name: "Laptop", price: 45000 },
  ];
  return (
    <div className="App">
      {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}
    </div>
  );
}
function Product(props) {
  return (
    <div className="product">
      <h2>Name: {props.name}</h2>
      <p>Price {props.price}</p>
    </div>
  );
}

export default App;
