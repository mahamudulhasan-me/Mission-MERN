import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Checkout from "./components/Checkout/Checkout";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import SignUp from "./components/SignUp/SignUp";
import { getAddedItems } from "./getAddedItem/getAddedItem";
import "./index.css";
import PrivateRoute from "./privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductContainer />,
      },
      {
        path: "order",
        element: <Orders />,
        loader: getAddedItems,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
