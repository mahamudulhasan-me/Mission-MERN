import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Alljobs from "./components/Alljobs.jsx";
import Home from "./components/Home.jsx";
import MyJobs from "./components/MyJobs.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import SignInLayout from "./components/SignIn/SignInLayout.jsx";
import "./index.css";
import AuthProvider from "./provider/AuthProvider.jsx";

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
      },
    ],
  },
  {
    path: "/signin",
    element: <SignInLayout />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
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
