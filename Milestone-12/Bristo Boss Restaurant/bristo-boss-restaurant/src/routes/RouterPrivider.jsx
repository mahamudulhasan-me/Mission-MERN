import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import OurMenu from "../components/Pages/OurMenu/OurMenu";
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
]);

export default router;
