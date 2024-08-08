import React from "react";
import Categorise from "./Categorise";
import Banner from "./Banner";
import SpecialDishes from "./SpecialDishes";
import Testimonial from "./Testimonial";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Categorise />
      <Banner />
      <SpecialDishes />
      <Testimonial />
      <Services />
    </div>
  );
};
export default Home;
