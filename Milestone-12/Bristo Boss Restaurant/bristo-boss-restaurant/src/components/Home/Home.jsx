import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import ChefService from "./ChefService/ChefService";
import Feature from "./Feature/Feature";
import MenuItems from "./MenuItems/MenuItems";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bristo Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <ChefService />
      <MenuItems />
      <CallUs />
      <ChefRecommends />
      <Feature />
      <Testimonials />
    </div>
  );
};

export default Home;
