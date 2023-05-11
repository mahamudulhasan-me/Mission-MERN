import { createBrowserRouter } from "react-router-dom";
import AppointmentInfo from "../components/AppointmentInfo/AppointmentInfo";
import Checkout from "../components/Checkout/Checkout";
import Home from "../components/Home/Home";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import SignIn from "../components/User/SignIn";
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
        path: "service-details/:_id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5050/services/${params._id}`),
      },
      {
        path: "checkout/:_id",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5050/services/${params._id}`),
      },
      {
        path: "appointment-info",
        element: (
          <ProtectedRoute>
            <AppointmentInfo />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/signIn-signUp",
    element: <SignIn />,
  },
]);
export default router;
