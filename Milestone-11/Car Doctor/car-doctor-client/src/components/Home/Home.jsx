import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import ContactMini from "./ContactMini/ContactMini";
import OurProducts from "./OurProducts/OurProducts";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
      <ContactMini />
      <OurProducts />
    </div>
  );
};

export default Home;
