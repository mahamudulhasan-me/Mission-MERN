import { createBrowserRouter } from "react-router-dom";
import CoreFeatures from "../admin/CoreFeatures/CoreFeatures";
import MeatTeam from "../admin/MeatTeam/MeatTeam";
import AppointmentInfo from "../components/AppointmentInfo/AppointmentInfo";
import Checkout from "../components/Checkout/Checkout";
import Home from "../components/Home/Home";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import SignIn from "../components/User/SignIn";
import Admin from "../layouts/Admin";
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
  {
    path: "admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/features",
        element: <CoreFeatures />,
      },
      { path: "/admin/team", element: <MeatTeam /> },
    ],
  },
]);
export default router;
