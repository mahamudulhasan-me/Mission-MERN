import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import Home from "../components/Home/Home";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
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
        path: "service-details/:_id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5050/services/${params._id}`),
      },
      {
        path: "checkout/:_id",
        element: <Checkout />,
      },
    ],
  },
]);
export default router;
