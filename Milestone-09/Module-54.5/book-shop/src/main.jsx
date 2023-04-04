import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutUs from "./components/AboutUs/AboutUs";
import Books from "./components/Books/Books";
import Home from "./components/Home/Home";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "books",
        element: <Books />,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
