import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import AllMango from "./components/AllMango.jsx";
import UpdateMango from "./components/UpdateMango.jsx";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "allMango",
    element: <AllMango />,
    loader: () => fetch(`http://localhost:7070/mangos`),
  },
  {
    path: "mango/:_id",
    element: <UpdateMango />,
    loader: ({ params }) => fetch(`http://localhost:7070/mangos/${params._id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
