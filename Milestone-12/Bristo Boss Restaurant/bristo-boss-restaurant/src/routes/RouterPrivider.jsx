import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import AddItem from "../components/Pages/Dashboard/AddItems/AddItem";
import AdminHome from "../components/Pages/Dashboard/AdminHome/AdminHome";
import AllUser from "../components/Pages/Dashboard/AllUser/AllUser";
import ManageItems from "../components/Pages/Dashboard/ManageItems/ManageItems";
import MyCart from "../components/Pages/Dashboard/MyCart/MyCart";
import Payment from "../components/Pages/Dashboard/Payment/Payment";
import UserHome from "../components/Pages/Dashboard/UserHome/UserHome";
import OurMenu from "../components/Pages/OurMenu/OurMenu";
import Login from "../components/Pages/User/Login";
import Register from "../components/Pages/User/Register";
import Shop from "../components/Shared/Shop/Shop";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import AdminRoute from "../protectedRoute/AdminRoute";
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
        path: "user",
        element: <UserHome />,
      },
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "my-cart",
        element: <MyCart />,
      },

      {
        path: "all-user",
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
      },
      {
        path: "add-item",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
]);

export default router;
