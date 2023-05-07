import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Update from "./components/Update.jsx";
import Users from "./components/Users.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "users",
    element: <Users />,
    loader: () => fetch(`http://localhost:8080/users`),
  },
  {
    path: "update/:_id",
    element: <Update />,
    loader: ({ params }) => fetch(`http://localhost:8080/users/${params._id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
