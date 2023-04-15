import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import EmailSignIn from "./components/EmailSignIn/EmailSignIn";
import EmailSignUp from "./components/EmailSignUp/EmailSignUp";
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
        path: "email-signUp",
        element: <EmailSignUp />,
      },
      {
        path: "email-signIn",
        element: <EmailSignIn />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
