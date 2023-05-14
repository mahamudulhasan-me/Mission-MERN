import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import ContactMini from "./ContactMini/ContactMini";
import CoreFeatures from "./CoreFeatures/CoreFeatures";
import OurProducts from "./OurProducts/OurProducts";
import Services from "./Services/Services";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
      <ContactMini />
      <OurProducts />
      <CoreFeatures />
      <Team />
    </div>
  );
};

export default Home;
