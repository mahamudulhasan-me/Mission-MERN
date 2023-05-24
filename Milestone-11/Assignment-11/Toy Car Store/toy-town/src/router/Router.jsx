import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import AddToy from "../components/Pages/AddToy/AddToy";
import AllToys from "../components/Pages/AllToys/AllToys";

import LatestBlogs from "../components/Pages/Blogs/LatestBlogs";
import MyToys from "../components/Pages/MyToys/MyToys";
import NotFound from "../components/Pages/NotFound/NotFound";
import ToyDetails from "../components/Pages/ToyDetails/ToyDetails";
import SignIn from "../components/User/SignIn";
import Main from "../layout/Main";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/add-a-toy",
        element: (
          <ProtectedRoute>
            <AddToy />
          </ProtectedRoute>
        ),
      },
      {
        path: "toy-details/:id",
        element: (
          <ProtectedRoute>
            <ToyDetails />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-town-server-mahamudulhasan-me.vercel.app/toy-details/${params?.id}`
          ),
      },
      {
        path: "allToys",
        element: <AllToys />,
      },
      {
        path: "my-toys/:uid",
        element: (
          <ProtectedRoute>
            <MyToys />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-town-server-mahamudulhasan-me.vercel.app/my-toys/${params?.uid}`
          ),
      },
      {
        path: "/blogs",
        element: <LatestBlogs />,
        loader: () =>
          fetch(`https://toy-town-server-mahamudulhasan-me.vercel.app/blogs`),
      },
    ],
  },
]);

export default router;
