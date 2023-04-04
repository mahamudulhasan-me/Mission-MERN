import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import FoodDetails from "./components/Foods/FoodDetails";
import Foods from "./components/Foods/Foods";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Restaurant from "./components/Restaurant/Restaurant";

const router = createBrowserRouter([
  {
    path: "",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Foods />,
      },
      {
        path: "food/:mealName",
        element: <FoodDetails />,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.mealName}`
          ),
      },
      {
        path: "restaurant",
        element: <Restaurant />,
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
