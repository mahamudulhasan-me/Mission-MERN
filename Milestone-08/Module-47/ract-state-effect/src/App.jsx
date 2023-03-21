import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  // useEffect(()=>{},[])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`).then((response) =>
      response.json().then((data) => setUsers(data))
    );
  }, []);

  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {users.map((user) => (
        <ShowUserInfo
          name={user.name}
          email={user.email}
          address={user.address?.street}
        ></ShowUserInfo>
      ))}
    </div>
  );
}

function ShowUserInfo(props) {
  return (
    <div className="user">
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
      <p>Address: {props.address}</p>
    </div>
  );
}
// counter component
// function Counter() {
//   const [count, setCount] = useState(0);
//   const countIncrement = () => setCount(count + 1);
//   const countDecrease = () => setCount(count - 1);
//   return (
//     <div className="Counter">
//       <h2>Counter: {count}</h2>
//       <button onClick={countIncrement}>Increase</button>
//       <button onClick={countDecrease}>Decrease</button>
//     </div>
//   );
// }

// for dynamic data
// {products.map((product) => (
//   <Product name={product.name} price={product.price}></Product>
// ))}
// const products = [
//   { name: "Laptop", price: 45000 },
//   { name: "Laptop", price: 45000 },
//   { name: "Laptop", price: 45000 },
//   { name: "Laptop", price: 45000 },
// ];

// function Product(props) {
//   return (
//     <div className="product">
//       <h2>Name: {props.name}</h2>
//       <p>Price {props.price}</p>
//     </div>
//   );
// }

export default App;
