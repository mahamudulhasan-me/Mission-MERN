import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import OurMenu from "../components/Pages/OurMenu/OurMenu";
import Login from "../components/Pages/User/Login";
import Register from "../components/Pages/User/Register";
import Shop from "../components/Shared/Shop/Shop";
import Main from "../layouts/Main";

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
]);

export default router;
