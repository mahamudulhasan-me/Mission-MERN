import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AddChocolate from "./components/AddChocolate.jsx";
import Chocolates from "./components/Chocolates.jsx";
import UpdateChocolate from "./components/UpdateChocolate.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Chocolates />,
        loader: () => fetch(`http://localhost:7070/chocolate`),
      },
      {
        path: "addChocolate",
        element: <AddChocolate />,
      },
      {
        path: "updateChocolate/:_id",
        element: <UpdateChocolate />,
        loader: ({ params }) =>
          fetch(`http://localhost:7070/chocolate/${params._id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
