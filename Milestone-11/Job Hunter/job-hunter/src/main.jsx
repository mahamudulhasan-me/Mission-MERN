import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Alljobs from "./components/Alljobs.jsx";
import Home from "./components/Home.jsx";
import MyJobs from "./components/MyJobs.jsx";
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
        path: "alljobs",
        element: <Alljobs />,
      },
      {
        path: "myjobs",
        element: <MyJobs />,
        loader: () => fetch(`http://localhost:4040/myjobs`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
