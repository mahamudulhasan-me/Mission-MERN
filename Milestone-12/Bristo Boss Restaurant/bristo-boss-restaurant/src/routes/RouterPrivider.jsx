import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import AllUser from "../components/Pages/Dashboard/AllUser/AllUser";
import MyCart from "../components/Pages/Dashboard/MyCart/MyCart";
import OurMenu from "../components/Pages/OurMenu/OurMenu";
import Login from "../components/Pages/User/Login";
import Register from "../components/Pages/User/Register";
import Shop from "../components/Shared/Shop/Shop";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "our-menu",
        element: <OurMenu />,
      },
      {
        path: "shop/:menu",
        element: <Shop />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "my-cart",
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
      {
        path: "all-user",
        element: <AllUser />,
      },
    ],
  },
]);

export default router;
