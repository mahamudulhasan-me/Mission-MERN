import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import "./index.css";
import Main from "./layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import UserProvider from "./providers/UserProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "register", element: <Register /> },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
