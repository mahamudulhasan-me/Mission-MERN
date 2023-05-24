import React from "react";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import CategoryProducts from "./CategoryProducts/CategoryProducts";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import Sponsor from "./Sponsor/Sponsor";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <Category />
      <CategoryProducts />
      <PhotoGallery />
      <Sponsor />
    </div>
  );
};

export default Home;
