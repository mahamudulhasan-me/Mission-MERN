import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/phones/Home";
import Phone from "./components/phones/Phone";
import SinglePHone from "./components/phones/SinglePHone";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/phones",
        element: <Phone />,
        loader: () => fetch(`http://localhost:5000/phone/`),
      },
      {
        path: "/phone/:id",
        element: <SinglePHone />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/phone/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
